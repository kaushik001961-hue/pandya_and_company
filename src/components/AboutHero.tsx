"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#041B57] via-[#1C2F75] to-[#6D4CC9]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* About Badge */}
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 mb-8">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Trusted Financial &
            <br />
            CA Consultancy
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-300 leading-8">
            Pandya & Company provides professional loan consultancy,
            taxation, GST, accounting, and financial advisory services
            with complete transparency and expert guidance.
          </p>

        </motion.div>

      </div>
    </section>
  );
}