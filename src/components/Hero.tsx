"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    // 🚀 FIXED: Hardened the width limit and added explicit layout constraints
    <section className="relative h-screen w-full max-w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Transparent Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r
        from-[#020B2D]/25
        via-[#020B2D]/15
        to-[#0B3A75]/25"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center w-full">
        {/* 🚀 FIXED: Added overflow protection to the content container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Reduced y-offset slightly to completely avoid window size miscalculations
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* 🚀 FIXED: Added inline-block and responsive text size adjustments to prevent narrow screen overflow */}
            <span className="inline-block max-w-full rounded-full bg-white/15 px-3 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-md whitespace-normal break-words text-center">
              Trusted Chartered Accountant & Loan Consultancy
            </span>

            {/* 🚀 FIXED: Changed text size to be smaller on mobile (text-4xl) and scale smoothly (md:text-7xl) */}
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl tracking-tight">
              Empowering Your{" "}
              <span className="block text-cyan-400 mt-1">
                Financial Success
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed sm:leading-8 text-gray-200">
              Pandya & Company provides expert Chartered Accountant,
              Income Tax, GST, Business Registration, Project Finance,
              and Loan Consultancy services with trusted professional guidance.
            </p>

            {/* 🚀 FIXED: Optimized button padding sizes and spacing layout for mobile screens */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 w-full">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center rounded-xl bg-cyan-500 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition hover:bg-cyan-600 shadow-lg text-sm sm:text-base"
              >
                Get Free Consultation
              </Link>

              <a
                href="tel:+919426948661"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20 text-sm sm:text-base"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/919426948661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-green-400 bg-green-500 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition hover:bg-green-600 text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}