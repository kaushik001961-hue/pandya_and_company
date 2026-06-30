"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "CA Kalpesh Pandya",
    role: "Chartered Accountant",
    email: "kppandya0011@gmail.com",
    phone: "+91 98765 43210",
  },
  {
    name: "Sumit Pandya",
    role: "Loan Consultant",
    email: "kppandya0011@gmail.com",
    phone: "+91 98765 43210",
  },
  {
    name: "Financial Advisor",
    role: "Investment & Tax Planning",
    email: "kppandya0011@gmail.com",
    phone: "+91 98765 43210",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🖼️ HERO IMAGE BANNER */}
        <div className="relative w-full h-[220px] md:h-[420px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">

          <Image
            src="/images/experts.jpg"
            alt="Meet Our Experts"
            fill
            className="object-cover scale-105 hover:scale-110 transition duration-700"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/30 to-transparent" />

          {/* text */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <h2 className="text-2xl md:text-4xl font-bold">
              Meet Our Experts
            </h2>
            <p className="text-white/70 mt-2 text-sm md:text-base">
              Trusted Chartered Accountants & Financial Advisors
            </p>
          </div>

        </div>

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            OUR TEAM
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional Experts
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mt-6">
            Our experienced professionals provide reliable taxation, accounting,
            loan and financial consulting services.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                bg-slate-900/60 backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8
                hover:border-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-center mt-6">
                {member.name}
              </h3>

              <p className="text-blue-400 text-center mt-2">
                {member.role}
              </p>

              <div className="mt-8 space-y-3 text-slate-300 text-sm">

                <div className="flex items-center gap-2 justify-center">
                  <Mail size={16} />
                  {member.email}
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <Phone size={16} />
                  {member.phone}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}