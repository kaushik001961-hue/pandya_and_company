"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Calculator, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [shrink, setShrink] = useState(false);

  const clickSound = useRef<HTMLAudioElement | null>(null);

  // 🔊 create click sound once
  useEffect(() => {
    clickSound.current = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/pop.ogg"
    );
  }, []);

  const playClick = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
  };

  // 🧠 scroll behavior (hide + shrink + spy)
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShrink(scrollY > 40);
      setHidden(scrollY > lastScroll && scrollY > 120);

      lastScroll = scrollY;

      const sections = ["home", "about", "services", "calculator", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id: string, label: string, icon: any) => (
    <a
      href={`#${id}`}
      onClick={() => {
        setActive(id);
        playClick();
        setOpen(false);
      }}
      className="relative flex items-center gap-2 px-4 py-2 text-white group"
    >
      {icon}

      <span>{label}</span>

      {/* 🌈 neon glow active indicator */}
      {active === id && (
        <motion.span
          layoutId="activeGlow"
          className="absolute bottom-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400
          shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      )}

      {/* hover underline */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
    </a>
  );

  return (
    <>
      {/* 🎥 animated gradient background */}
      <motion.nav
        animate={{
          y: hidden ? -120 : 0,
          paddingTop: shrink ? 8 : 16,
          paddingBottom: shrink ? 8 : 16,
        }}
        transition={{ duration: 0.25 }}
        className="
          sticky top-0 z-50
          bg-gradient-to-r from-[#0a1a4a] via-[#233B8B] to-[#6D4CC9]
          bg-[length:200%_200%]
          animate-gradientMove
          backdrop-blur-2xl
          border-b border-white/10
          shadow-xl
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">

          {/* LEFT */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              className="object-contain"
            />

            <div>
              <h1 className="text-white font-bold text-xl">
                Pandya & Company
              </h1>
              <p className="text-white/60 text-sm hidden md:block">
                CA & Financial Consultancy
              </p>
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-2">
            {navItem("home", "Home", <Home size={16} />)}
            {navItem("about", "About", <User size={16} />)}
            {navItem("services", "Services", <Briefcase size={16} />)}
            {navItem("calculator", "Calculator", <Calculator size={16} />)}
            {navItem("contact", "Contact", <Phone size={16} />)}
          </div>

          {/* CTA */}
          <button
            onClick={() => playClick()}
            className="hidden lg:block bg-white text-[#233B8B] px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Consultation
          </button>

          {/* MOBILE */}
          <button
            onClick={() => {
              setOpen(!open);
              playClick();
            }}
            className="lg:hidden text-white text-3xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden backdrop-blur-xl bg-white/10 border-t border-white/10 px-6 py-4"
            >
              <div className="flex flex-col gap-3">
                {navItem("home", "Home", <Home size={16} />)}
                {navItem("about", "About", <User size={16} />)}
                {navItem("services", "Services", <Briefcase size={16} />)}
                {navItem("calculator", "Calculator", <Calculator size={16} />)}
                {navItem("contact", "Contact", <Phone size={16} />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 🎥 CSS ANIMATION (add to globals.css) */}
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradientMove {
          animation: gradientMove 8s ease infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}