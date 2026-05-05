"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const sourceData = [
  { name: "Direct", value: 4200, color: "#ec4899" },
  { name: "Google", value: 3100, color: "#f472b6" },
  { name: "Social Media", value: 1800, color: "#ab47bc" },
  { name: "Referral", value: 1400, color: "#ec407a" },
  { name: "Ad Networks", value: 900, color: "#ffa726" },
]

export function TrafficSources() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h2 className="pb-4 text-lg font-semibold text-card-foreground">
        Traffic Sources
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sourceData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
            >
              {sourceData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid hsl(230 10% 90%)",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
