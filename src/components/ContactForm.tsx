"use client";

export default function ContactForm() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Send an Inquiry
        </h2>

        <form className="mt-12 space-y-6">

          <input
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 text-white"
          />

          <input
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 text-white"
          />

          <input
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 text-white"
          />

          <select className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 text-white">
            <option>Home Loan</option>
            <option>Business Loan</option>
            <option>Personal Loan</option>
            <option>Mortgage Loan</option>
            <option>GST Services</option>
            <option>Income Tax</option>
            <option>Accounting</option>
          </select>

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 text-white"
          />

          <button className="w-full bg-blue-600 py-4 rounded-xl text-white font-semibold">
            Submit Inquiry
          </button>

        </form>

      </div>

    </section>
  );
}