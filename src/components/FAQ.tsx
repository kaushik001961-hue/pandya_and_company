"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I get a loan approval?",
    a: "Loan approvals usually take 24–72 hours depending on the bank and documentation readiness.",
  },
  {
    q: "Do you charge any upfront fees?",
    a: "No hidden charges. We follow a transparent process and only charge as per agreed consultancy terms.",
  },
  {
    q: "What types of loans do you provide assistance for?",
    a: "We assist with Home Loans, Business Loans, Personal Loans, and Project Financing.",
  },
  {
    q: "Do you provide CA services for small businesses?",
    a: "Yes, we provide complete CA services including GST filing, accounting, audits, and compliance.",
  },
  {
    q: "Can I get help with GST registration and filing?",
    a: "Absolutely. We handle GST registration, monthly filing, returns, and compliance management.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full top-10 right-10" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full bottom-10 left-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 mt-3">
            Everything you need to know about our loan & CA services
          </p>
        </motion.div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium">{item.q}</span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0 }}
                    className="px-5 pb-5 text-slate-400 text-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-4">
            Still have questions?
          </p>

          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition font-medium"
          >
            Contact Our Experts
          </a>
        </div>

      </div>
    </section>
  );
}