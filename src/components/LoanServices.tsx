export default function LoanServices() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-white font-bold">
          Loan Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-slate-950 p-8 rounded-3xl">
            <h3 className="text-2xl text-white font-bold">
              Home Loan
            </h3>

            <p className="text-slate-300 mt-4">
              Competitive interest rates and quick approvals.
            </p>
          </div>

          <div className="bg-slate-950 p-8 rounded-3xl">
            <h3 className="text-2xl text-white font-bold">
              Business Loan
            </h3>

            <p className="text-slate-300 mt-4">
              Working capital and expansion finance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}