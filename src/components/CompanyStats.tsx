"use client";

export default function CompanyStats() {
  const stats = [
    ["5000+", "Happy Clients"],
    ["₹500Cr+", "Loans Processed"],
    ["10+", "Years Experience"],
    ["98%", "Client Satisfaction"],
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#041B57] via-[#2E3E90] to-[#6D4CC9]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item[1]}
              className="text-center"
            >
              <h2 className="text-5xl font-bold text-white">
                {item[0]}
              </h2>

              <p className="mt-3 text-lg text-white/80">
                {item[1]}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}