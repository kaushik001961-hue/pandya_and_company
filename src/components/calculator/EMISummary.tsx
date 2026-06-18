interface Props {
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

export default function EMISummary({
  emi,
  totalPayment,
  totalInterest,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <p className="text-white/60">
          Monthly EMI
        </p>

        <h3 className="text-3xl font-bold text-green-400">
          ₹{emi.toFixed(0)}
        </h3>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <p className="text-white/60">
          Total Payment
        </p>

        <h3 className="text-3xl font-bold text-blue-400">
          ₹{totalPayment.toFixed(0)}
        </h3>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <p className="text-white/60">
          Total Interest
        </p>

        <h3 className="text-3xl font-bold text-purple-400">
          ₹{totalInterest.toFixed(0)}
        </h3>
      </div>

    </div>
  );
}