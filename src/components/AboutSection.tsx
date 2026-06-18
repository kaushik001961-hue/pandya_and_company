"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Home Loan Consultancy",
  "Business Loan Assistance",
  "Mortgage Loan Services",
  "Income Tax Return Filing",
  "GST Registration & Returns",
  "Accounting & Bookkeeping",
];

export default function AboutSection() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <Image
              src="/images/about.jpg"
              alt="Pandya & Company"
              width={700}
              height={700}
              className="rounded-[30px] shadow-2xl object-cover w-full h-[550px]"
            />

            <div
              className="
                absolute
                bottom-6
                left-6
                bg-blue-600
                rounded-3xl
                px-8
                py-5
                shadow-xl
              "
            >
              <h3 className="text-4xl font-bold text-white">
                10+
              </h3>

              <p className="text-white">
                Years Experience
              </p>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="uppercase tracking-[4px] text-blue-400 text-sm">
              ABOUT US
            </span>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              Trusted Financial &
              <br />
              Tax Consultancy
            </h2>

            <p className="text-slate-300 mt-8 text-lg leading-8">
              Pandya & Company provides complete financial,
              taxation and loan consultancy services under one roof.
              Our experienced professionals help individuals,
              businesses and startups achieve their financial goals
              with confidence and transparency.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              {services.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-blue-400 w-5 h-5" />

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                gap-2
                mt-10
                bg-blue-600
                hover:bg-blue-700
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              Learn More

              <ArrowRight size={18} />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}