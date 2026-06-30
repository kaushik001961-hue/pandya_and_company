"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#041B57] via-[#233B8B] to-[#6D4CC9] shadow-lg">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-3">

        {/* LEFT */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 min-w-0">

          {/* LOGO */}
          <div className="relative w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Pandya & Company"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <h1 className="text-[16px] md:text-[34px] font-extrabold tracking-wide text-white leading-tight truncate">
              Pandya & Company
            </h1>

            <p className="hidden md:block text-sm text-gray-200">
              CA & Financial Consultancy
            </p>
          </div>

        </Link>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-8 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/calculator">Calculator</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* BUTTON */}
        <Link
          href="/contact"
          className="hidden lg:inline-block rounded-full bg-white px-6 py-2 font-semibold text-[#233B8B] transition hover:scale-105"
        >
          Get Consultation
        </Link>

      </div>

    </nav>
  );
}