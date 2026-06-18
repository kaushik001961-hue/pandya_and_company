"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      flex
      items-center
      justify-center
      shadow-xl
      hover:scale-110
      transition
      "
    >
      <MessageCircle className="text-white" size={30} />
    </a>
  );
}