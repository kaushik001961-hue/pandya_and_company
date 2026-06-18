"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  FileText,
  BadgeIndianRupee,
  Calculator,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Get lowest interest home loans with top banks and fast approval.",
  },
  {
    icon: Building2,
    title: "Business Loan",
    desc: "Funding solutions for MSMEs, startups, and growing businesses.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Personal Loan",
    desc: "Instant personal loans with minimal documentation.",
  },
  {
    icon: FileText,
    title: "GST & Tax Filing",
    desc: "Complete GST, income tax and compliance services by experts.",
  },
  {
    icon: Calculator,
    title: "Financial Planning",
    desc: "Smart financial planning for long-term wealth growth.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & CA Services",
    desc: "Professional CA services for audit, accounting & compliance.",
  },
];

export default function ServiceCategories() {
  return (
    <section className="relative py-24 bg-slate-950 text-white">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full top-10 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full bottom-10 right-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">
            Our Premium Financial Services
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            We provide end-to-end financial, loan and CA solutions tailored for individuals and businesses.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  group
                  relative
                  p-6
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  transition
                  cursor-pointer
                "
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="text-blue-400" size={24} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition font-medium"
          >
            Explore All Services
          </a>
        </div>

      </div>
    </section>
  );
}