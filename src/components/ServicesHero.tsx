"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-32 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="uppercase tracking-[4px] text-blue-400 text-sm">
          OUR SERVICES
        </span>

        <h1 className="text-6xl font-bold text-white mt-6">
          Financial & CA Solutions
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto mt-8 text-lg">
          Home Loans, Business Loans, Income Tax, GST,
          Accounting and Company Registration under one roof.
        </p>

      </motion.div>

    </section>
  );
}