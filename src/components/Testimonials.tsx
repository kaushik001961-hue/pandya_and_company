"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Patel",
    role: "Business Owner",
    text: "Pandya & Company helped me get a business loan in just 4 days. Extremely smooth process and full support.",
  },
  {
    name: "Neha Sharma",
    role: "Entrepreneur",
    text: "Very professional CA services. They handled my GST and tax filing perfectly without any hassle.",
  },
  {
    name: "Amit Desai",
    role: "Shop Owner",
    text: "Best financial consultancy in the city. Got lowest interest rate for my home loan.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full top-10 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full bottom-10 right-10" />
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
            What Our Clients Say
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Real feedback from clients who trusted us for loans, taxation and financial services.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
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
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:bg-white/10
                transition
                group
              "
            >

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>

              {/* TEXT */}
              <p className="text-slate-300 text-sm leading-relaxed">
                "{item.text}"
              </p>

              {/* NAME */}
              <div className="mt-6">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-slate-400 text-xs">{item.role}</p>
              </div>

              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}