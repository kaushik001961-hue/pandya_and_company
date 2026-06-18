"use client";

import { useState } from "react";

import EMIChart from "@/components/calculator/EMIChart";
import EMISummary from "@/components/calculator/EMISummary";

import { downloadLoanPDF } from "@/lib/downloadLoanPDF";

export default function CalculatorPage() {

  const [amount, setAmount] = useState(500000);

  const [rate, setRate] = useState(10);

  const [years, setYears] = useState(1);

  const r = rate / 12 / 100;

  const n = years * 12;

  const emi =
    (amount * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1);

  const finalEmi =
    isFinite(emi) ? emi : 0;

  const totalPayment =
    finalEmi * years * 12;

  const totalInterest =
    totalPayment - amount;

const shareOnWhatsApp = () => {

  const shareText = `🏦 Pandya & Company Loan EMI Report

Loan Amount: ₹${amount.toLocaleString()}

Interest Rate: ${rate}%

Loan Tenure: ${years} Years

Monthly EMI: ₹${finalEmi.toFixed(0)}

Total Payment: ₹${totalPayment.toFixed(0)}

Total Interest: ₹${totalInterest.toFixed(0)}

Generated using Pandya & Company Financial Calculator`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    "_blank"
  );
};

  return (

    <div className="min-h-screen bg-[#060818] text-white py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Loan EMI Calculator
        </h1>

        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

          <div className="space-y-6">

            <div>

              <label className="block mb-2 text-white/70">

                Loan Amount (₹)

              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(Number(e.target.value))
                }
                className="w-full rounded-xl bg-white/10 p-4"
              />

            </div>

            <div>

              <label className="block mb-2 text-white/70">

                Interest Rate (%)

              </label>

              <input
                type="number"
                value={rate}
                onChange={(e) =>
                  setRate(Number(e.target.value))
                }
                className="w-full rounded-xl bg-white/10 p-4"
              />

            </div>

            <div>

              <label className="block mb-2 text-white/70">

                Loan Tenure (Years)

              </label>

              <input
                type="number"
                value={years}
                onChange={(e) =>
                  setYears(Number(e.target.value))
                }
                className="w-full rounded-xl bg-white/10 p-4"
              />

            </div>

          </div>

          <EMISummary
            emi={finalEmi}
            totalPayment={totalPayment}
            totalInterest={totalInterest}
          />

          <EMIChart
            principal={amount}
            interest={totalInterest}
          />

          <div className="mt-10 flex justify-center">

          <div className="mt-8 flex flex-wrap justify-center gap-4">

  <button
    onClick={() =>
      downloadLoanPDF({
        amount,
        rate,
        years,
        emi: finalEmi,
        totalPayment,
        totalInterest,
      })
    }
    className="rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 transition"
  >
    📄 Download PDF
  </button>

  <button
    onClick={shareOnWhatsApp}
    className="rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 transition"
  >
    📲 Share on WhatsApp
  </button>

</div>

          </div>

        </div>

      </div>

    </div>

  );
}