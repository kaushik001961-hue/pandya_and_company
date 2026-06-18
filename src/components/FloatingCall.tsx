"use client";

import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+919876543210"
      className="
      fixed
      bottom-28
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-blue-600
      flex
      items-center
      justify-center
      shadow-xl
      hover:scale-110
      transition
      "
    >
      <Phone className="text-white" size={28} />
    </a>
  );
}