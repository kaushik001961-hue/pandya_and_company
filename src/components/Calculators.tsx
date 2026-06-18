"use client";

import Link from "next/link";
import {
  Calculator,
  Landmark,
  Receipt,
  BadgeIndianRupee,
  ArrowRight,
} from "lucide-react";

const calculators = [
  {
    title: "EMI Calculator",
    icon: Calculator,
    desc: "Calculate your monthly EMI instantly with detailed repayment schedule.",
    href: "/calculator?tab=emi",
  },
  {
    title: "Loan Eligibility",
    icon: Landmark,
    desc: "Check your loan eligibility online based on your income and obligations.",
    href: "/calculator?tab=eligibility",
  },
  {
    title: "Income Tax Calculator",
    icon: Receipt,
    desc: "Estimate your income tax liability under the latest tax regime.",
    href: "/calculator?tab=tax",
  },
  {
    title: "GST Calculator",
    icon: BadgeIndianRupee,
    desc: "Calculate GST amount and invoice total quickly and accurately.",
    href: "/calculator?tab=gst",
  },
];

export default function Calculators() {
  return (
    <section className="py-24 bg-[#020B2D]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#041B57] via-[#2E3E90] to-[#6D4CC9] text-white uppercase tracking-[4px] text-sm">
            Financial Tools
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Smart Financial Calculators
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Free online financial calculators to help you plan your loans,
            taxes and GST with confidence.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {calculators.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.title} href={item.href}>

                <div
                  className="
                    h-full
                    rounded-3xl
                    p-8
                    bg-gradient-to-br
                    from-[#041B57]/20
                    via-[#09142D]
                    to-[#6D4CC9]/20
                    border
                    border-white/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-purple-500
                    hover:shadow-[0_0_35px_rgba(109,76,201,0.35)]
                    cursor-pointer
                  "
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#041B57] to-[#6D4CC9] flex items-center justify-center mb-6">

                    <Icon className="w-8 h-8 text-white" />

                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-7">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center text-purple-300 font-semibold group">
                    Open Calculator

                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}