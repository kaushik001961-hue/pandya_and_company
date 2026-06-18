"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  FileText,
  SearchCheck,
  BadgeCheck,
  Wallet,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Free Consultation",
    desc: "Discuss your financial or taxation requirements with our experts.",
  },
  {
    icon: FileText,
    title: "Document Collection",
    desc: "We collect and verify all required documents quickly.",
  },
  {
    icon: SearchCheck,
    title: "Verification",
    desc: "Complete verification and eligibility assessment.",
  },
  {
    icon: BadgeCheck,
    title: "Processing",
    desc: "Loan or CA service is processed professionally.",
  },
  {
    icon: Wallet,
    title: "Approval",
    desc: "Receive approval and complete your financial journey.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            OUR PROCESS
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Simple & Transparent Process
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto">
            We ensure a smooth experience from consultation to approval.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl text-white font-bold mt-8">
                  {step.title}
                </h3>

                <p className="text-slate-400 mt-4">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}