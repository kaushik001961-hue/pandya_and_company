"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <span className="uppercase tracking-[4px] text-blue-400 text-sm">
          CONTACT US
        </span>

        <h1 className="text-6xl font-bold text-white mt-6">
          Get In Touch
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto mt-8 text-lg">
          Our experts are ready to help you with loans,
          taxation, accounting and financial consultancy.
        </p>

      </motion.div>

    </section>
  );
}