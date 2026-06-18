"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Landmark,
  User,
  Receipt,
  Calculator,
  BookOpen,
  Building,
} from "lucide-react";

const services = [
  { icon: Home, title: "Home Loan" },
  { icon: Briefcase, title: "Business Loan" },
  { icon: Landmark, title: "Mortgage Loan" },
  { icon: User, title: "Personal Loan" },
  { icon: Receipt, title: "Income Tax" },
  { icon: Calculator, title: "GST Services" },
  { icon: BookOpen, title: "Accounting" },
  { icon: Building, title: "Company Registration" },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition"
              >
                <Icon className="w-12 h-12 text-blue-400" />

                <h3 className="text-white text-2xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-slate-400 mt-4">
                  Professional consultancy and end-to-end assistance.
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}