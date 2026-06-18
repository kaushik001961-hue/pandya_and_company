"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Banknote,
  Users,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Trusted & Secure",
    desc: "We ensure complete transparency in loans, taxation, and financial services.",
  },
  {
    icon: Clock,
    title: "Fast Approval Process",
    desc: "Quick processing with minimal documentation and faster approvals.",
  },
  {
    icon: Banknote,
    title: "Lowest Interest Rates",
    desc: "We compare multiple banks to get you the best possible rates.",
  },
  {
    icon: Users,
    title: "Expert CA Team",
    desc: "Experienced Chartered Accountants for reliable financial guidance.",
  },
  {
    icon: BadgeCheck,
    title: "End-to-End Support",
    desc: "From application to approval, we handle everything for you.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Focus",
    desc: "We help businesses grow with smart financial planning solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[450px] h-[450px] bg-blue-600/10 blur-3xl rounded-full top-10 right-10" />
        <div className="absolute w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full bottom-10 left-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Why Choose Pandya & Company
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            We are committed to providing transparent, fast and reliable financial services for individuals and businesses.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  relative
                  p-6
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  transition
                  group
                "
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="text-green-400" size={24} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Glow Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-600/10 to-blue-600/10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-4">
            Ready to get started with expert financial guidance?
          </p>

          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl transition font-medium"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}