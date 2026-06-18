"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#041B57] via-[#233B8B] to-[#6D4CC9] shadow-lg">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

        {/* LEFT */}

        <Link href="/" className="flex items-center gap-4">

    <Image
  src="/logo.png"
  alt="Pandya & Company"
  width={90}
  height={90}
  style={{
    width: "80px",
    height: "auto",
  }}
/>
          <div>

            <h1 className="text-[34px] font-extrabold tracking-wide text-white">
              Pandya & Company
            </h1>

            <p className="text-sm text-gray-200">
              CA & Financial Consultancy
            </p>

          </div>

        </Link>

        {/* MENU */}

        <div className="hidden items-center gap-8 text-white font-medium lg:flex">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/calculator">Calculator</Link>

          <Link href="/contact">Contact</Link>

        </div>

        {/* BUTTON */}

        <Link
          href="/contact"
          className="rounded-full bg-white px-7 py-3 font-semibold text-[#233B8B] transition hover:scale-105"
        >
          Get Consultation
        </Link>

      </div>

    </nav>
  );
}