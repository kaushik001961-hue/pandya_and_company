"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-slate-300 mb-6"
        >
          Trusted CA & Loan Consultancy in India
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Smart Financial Solutions for{" "}
          <span className="text-blue-500">Loans</span>,{" "}
          <span className="text-purple-400">Tax</span> &{" "}
          <span className="text-green-400">Business Growth</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto"
        >
          We help individuals and businesses secure loans, manage taxation,
          and grow financially with expert CA guidance and banking support.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
        >
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition"
          >
            <Phone size={18} /> Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-medium transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          <Link
            href="/services"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-slate-400 text-sm">Loans Approved</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">1000+</h3>
            <p className="text-slate-400 text-sm">Clients Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">15+</h3>
            <p className="text-slate-400 text-sm">Bank Partners</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">10+ Yrs</h3>
            <p className="text-slate-400 text-sm">Experience</p>
          </div>

        </div>

      </div>
    </section>
  );
}