"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

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
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
              Trusted Chartered Accountant & Loan Consultancy
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Empowering Your
              <span className="block text-cyan-400">
                Financial Success
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Pandya & Company provides expert Chartered Accountant,
              Income Tax, GST, Business Registration, Project Finance,
              and Loan Consultancy services with trusted professional guidance.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
              >
                Get Free Consultation
              </Link>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-green-400 bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}