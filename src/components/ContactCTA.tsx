"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-12
            lg:p-16
            text-center
          "
        >

          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            GET STARTED
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Get Free Financial Consultation
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            Whether you need a Home Loan, Business Loan, GST Filing,
            Income Tax Return, Accounting, or Company Registration,
            our experts are ready to assist you with the right solution.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/contact"
              className="
                group
                bg-blue-600
                hover:bg-blue-700
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-2
                transition
              "
            >
              Book Free Consultation

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>

            <a
              href="tel:+919876543210"
              className="
                border
                border-white/10
                px-8
                py-4
                rounded-2xl
                flex
                items-center
                gap-2
                hover:border-blue-500
                transition
              "
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/+919426948661"
              target="_blank"
              className="
                border
                border-green-500/40
                px-8
                py-4
                rounded-2xl
                flex
                items-center
                gap-2
                hover:bg-green-600
                transition
              "
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-slate-300">

            <div className="flex items-center gap-2">
              <Mail size={18} />
              kppandya0011@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              +91 94269 48661
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}