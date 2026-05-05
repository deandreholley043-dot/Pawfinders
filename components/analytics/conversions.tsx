"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { UserPlus, CreditCard, Crown } from "lucide-react"

const conversionData = [
  { date: "Jan", signups: 120, paidAds: 45, memberships: 18 },
  { date: "Feb", signups: 145, paidAds: 52, memberships: 22 },
  { date: "Mar", signups: 168, paidAds: 61, memberships: 28 },
  { date: "Apr", signups: 192, paidAds: 58, memberships: 31 },
  { date: "May", signups: 210, paidAds: 72, memberships: 35 },
  { date: "Jun", signups: 238, paidAds: 68, memberships: 42 },
]

const conversionStats = [
  {
    title: "New Signups",
    value: "238",
    change: "+13.3%",
    positive: true,
    icon: UserPlus,
    color: "#ec4899",
  },
  {
    title: "Paid Ad Conversions",
    value: "68",
    change: "-5.6%",
    positive: false,
    icon: CreditCard,
    color: "#ab47bc",
  },
  {
    title: "New Memberships",
    value: "42",
    change: "+20.0%",
    positive: true,
    icon: Crown,
    color: "#ec407a",
  },
]

export function Conversions() {
  return (
    <div className="flex flex-col gap-6">
      {/* Conversion stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {conversionStats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.title}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: s.color + "18" }}
              >
                <Icon className="h-5 w-5" style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.title}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-card-foreground">
                    {s.value}
                  </p>
                  <span
                    className={`text-xs font-semibold ${
                      s.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {s.change}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Conversion trend line chart */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="pb-4 text-lg font-semibold text-card-foreground">
          Conversion Trends
        </h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={conversionData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(230 10% 90%)"
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "hsl(230 10% 50%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(230 10% 50%)" }}
                axisLine={false}
                tickLine={false}
              />
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
              <Line
                type="monotone"
                dataKey="signups"
                stroke="#ec4899"
                strokeWidth={2}
                dot={false}
                name="Signups"
              />
              <Line
                type="monotone"
                dataKey="paidAds"
                stroke="#ab47bc"
                strokeWidth={2}
                dot={false}
                name="Paid Ads"
              />
              <Line
                type="monotone"
                dataKey="memberships"
                stroke="#ec407a"
                strokeWidth={2}
                dot={false}
                name="Memberships"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
