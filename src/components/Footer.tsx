"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/10 mt-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* ================= ABOUT ================= */}
          <div>
            <h2 className="text-2xl font-bold">Pandya & Company</h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Trusted CA & Loan Consultancy helping individuals and businesses
              with loans, taxation, accounting and financial planning.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a className="hover:scale-110 transition" href="#">
                <FaFacebookF className="w-5 h-5 hover:text-blue-500" />
              </a>

              <a className="hover:scale-110 transition" href="#">
                <FaInstagram className="w-5 h-5 hover:text-pink-500" />
              </a>

              <a className="hover:scale-110 transition" href="#">
                <FaLinkedinIn className="w-5 h-5 hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* ================= LINKS ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([name, link]) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-slate-400">

              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} /> info@pandyaandcompany.com
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MapPin size={16} />
                View Office on Map
              </a>

              <p className="text-sm mt-2">
                Godhra, Gujarat, India
              </p>

            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm mb-2 text-slate-400">
                Subscribe to updates
              </p>

              <div className="flex">
                <input
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-l-lg outline-none"
                />

                <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Pandya & Company. All rights reserved.
        </div>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </a>

    </footer>
  );
}