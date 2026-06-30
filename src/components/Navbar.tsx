<div style={{ color: "red", fontSize: "30px" }}>
  NAVBAR LIVE TEST
</div>

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // shrink + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setShrink(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`transition hover:text-yellow-200 ${
        pathname === href
          ? "text-yellow-300 font-semibold"
          : "text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent">
        <div
          className="h-full bg-yellow-300 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <motion.nav
        animate={{
          paddingTop: shrink ? 6 : 14,
          paddingBottom: shrink ? 6 : 14,
        }}
        transition={{ duration: 0.25 }}
        className="
          sticky top-0 z-50
          bg-white/10 backdrop-blur-xl
          border-b border-white/10
          shadow-lg
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">

          {/* LEFT */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 min-w-0">

            <div className="relative w-[42px] h-[42px] md:w-[65px] md:h-[65px] rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Pandya & Company"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-[16px] md:text-[28px] font-extrabold text-white leading-tight truncate">
                Pandya & Company
              </h1>
              <p className="hidden md:block text-sm text-white/70">
                CA & Financial Consultancy
              </p>
            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/services", "Services")}
            {navLink("/calculator", "Calculator")}
            {navLink("/contact", "Contact")}
          </div>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="hidden lg:inline-block rounded-full bg-white px-6 py-2 font-semibold text-[#233B8B] hover:scale-105 transition"
          >
            Get Consultation
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white/10 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col gap-4 px-6 py-4 text-white">
                {navLink("/", "Home")}
                {navLink("/about", "About")}
                {navLink("/services", "Services")}
                {navLink("/calculator", "Calculator")}
                {navLink("/contact", "Contact")}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-white px-4 py-2 text-center font-semibold text-[#233B8B]"
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