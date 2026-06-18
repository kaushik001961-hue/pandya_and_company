"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section
  className="
    py-24
    bg-gradient-to-r
    from-[#142A72]
    via-[#2E3E90]
    to-[#6D4CC9]
  "
>
  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-6xl font-bold text-white">
      Need Financial Assistance?
    </h2>

    <p className="text-white/80 text-xl mt-6">
      Talk to our experts for the best loan and taxation solutions.
    </p>

    <button
      className="
        mt-10
        px-10
        py-4
        rounded-2xl
        bg-white
        text-[#243B8F]
        font-semibold
        text-lg
        hover:scale-105
        transition
      "
    >
      Book Free Consultation
    </button>

  </div>
</section>
  );
}