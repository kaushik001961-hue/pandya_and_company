"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Calculator, Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shrink, setShrink] = useState(false);

  const clickSound = useRef<HTMLAudioElement | null>(null);

  // 🔊 safe click sound
  useEffect(() => {
    clickSound.current = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/pop.ogg"
    );
  }, []);

  const playClick = () => {
    try {
      clickSound.current?.play();
    } catch {}
  };

  // 🧠 scroll behavior (hide + shrink)
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShrink(scrollY > 40);
      setHidden(scrollY > lastScroll && scrollY > 120);

      lastScroll = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ NAV LINK
  const navLink = (href: string, label: string, Icon: any) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => {
          setOpen(false);
          playClick();
        }}
        className={`relative flex items-center gap-2 px-3 py-2 transition
          ${isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"}
        `}
      >
        <Icon size={16} />

        <span>{label}</span>

        {/* glowing active underline */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* NAVBAR */}
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
          backdrop-blur-xl
          border-b border-white/10
          shadow-xl
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">

          {/* LEFT */}
          <Link href="/" onClick={playClick} className="flex items-center gap-3">
            <div className="relative w-[45px] h-[45px] md:w-[65px] md:h-[65px] rounded-full overflow-hidden border border-white/20">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-white font-bold text-lg md:text-xl">
                Pandya & Company
              </h1>
              <p className="text-white/60 text-xs md:text-sm hidden md:block">
                CA & Financial Consultancy
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            {navLink("/", "Home", Home)}
            {navLink("/about", "About", User)}
            {navLink("/services", "Services", Briefcase)}
            {navLink("/calculator", "Calculator", Calculator)}
            {navLink("/contact", "Contact", Phone)}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={playClick}
            className="hidden lg:inline-block bg-white text-[#233B8B] px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Consultation
          </Link>

          {/* MOBILE BUTTON */}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white/10 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col gap-3 px-6 py-4">
                {navLink("/", "Home", Home)}
                {navLink("/about", "About", User)}
                {navLink("/services", "Services", Briefcase)}
                {navLink("/calculator", "Calculator", Calculator)}
                {navLink("/contact", "Contact", Phone)}

                <Link
                  href="/contact"
                  onClick={() => {
                    setOpen(false);
                    playClick();
                  }}
                  className="mt-2 bg-white text-[#233B8B] px-4 py-2 rounded-full text-center font-semibold"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}