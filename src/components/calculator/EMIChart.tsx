"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface Props {
  principal: number;
  interest: number;
}

export default function EMIChart({
  principal,
  interest,
}: Props) {

  const data = [
    {
      name: "Principal",
      value: principal,
    },
    {
      name: "Interest",
      value: interest,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#a855f7",
  ];

  return (

    <div className="mt-12">

      <h2 className="text-2xl font-bold text-center mb-6">
        EMI Breakdown
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              label
            >
              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}