export default function BankingPartners() {

  const banks = [
    "SBI",
    "HDFC",
    "ICICI",
    "Axis Bank",
    "Bank of Baroda",
    "Kotak Mahindra",
  ];

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center text-white font-bold">
          Trusted Banking Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

          {banks.map((bank) => (
            <div
              key={bank}
              className="bg-slate-950 p-6 rounded-2xl text-center text-white border border-white/10"
            >
              {bank}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}