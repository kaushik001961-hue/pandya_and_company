"use client";

import { motion } from "framer-motion";
import {
  Users,
  BadgeIndianRupee,
  Award,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    title: "Happy Clients",
  },
  {
    icon: BadgeIndianRupee,
    number: "₹500 Cr+",
    title: "Loans Processed",
  },
  {
    icon: Award,
    number: "10+",
    title: "Years Experience",
  },
  {
    icon: CheckCircle,
    number: "99%",
    title: "Approval Assistance",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#041B57] via-[#2E3E90] to-[#6D4CC9]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  p-8
                  text-center
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-5xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="text-white/80 mt-3 text-lg">
                  {item.title}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}