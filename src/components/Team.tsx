"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "CA Kalpesh Pandya",
    role: "Chartered Accountant",
    email: "info@pandyaandcompany.com",
    phone: "+91 98765 43210",
  },
  {
    name: "Sumit Pandya",
    role: "Loan Consultant",
    email: "info@pandyaandcompany.com",
    phone: "+91 98765 43210",
  },
  {
    name: "Financial Advisor",
    role: "Investment & Tax Planning",
    email: "info@pandyaandcompany.com",
    phone: "+91 98765 43210",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            OUR TEAM
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Meet Our Experts
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mt-6">
            Our experienced professionals provide reliable loan, taxation,
            accounting and financial consulting services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white mx-auto">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-white text-center mt-6">
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