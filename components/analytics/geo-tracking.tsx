"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { MapPin, TrendingUp, TrendingDown } from "lucide-react"

const stateData = [
  { name: "California", visitors: 3420, conversions: 245 },
  { name: "Texas", visitors: 2890, conversions: 198 },
  { name: "New York", visitors: 2540, conversions: 176 },
  { name: "Florida", visitors: 2180, conversions: 152 },
  { name: "Illinois", visitors: 1750, conversions: 118 },
  { name: "Ohio", visitors: 1320, conversions: 89 },
  { name: "Georgia", visitors: 1180, conversions: 74 },
  { name: "Washington", visitors: 1050, conversions: 68 },
]

const cityData = [
  { city: "Los Angeles", state: "CA", visitors: 1840, convRate: 7.8 },
  { city: "Houston", state: "TX", visitors: 1520, convRate: 6.9 },
  { city: "New York City", state: "NY", visitors: 1480, convRate: 7.2 },
  { city: "Miami", state: "FL", visitors: 1210, convRate: 8.1 },
  { city: "Chicago", state: "IL", visitors: 1090, convRate: 6.5 },
  { city: "Phoenix", state: "AZ", visitors: 920, convRate: 5.8 },
  { city: "Dallas", state: "TX", visitors: 870, convRate: 7.1 },
  { city: "Atlanta", state: "GA", visitors: 810, convRate: 6.3 },
]

const highPerforming = [
  { region: "Miami, FL", metric: "+12.4% conv. rate", trend: "up" as const },
  { region: "Los Angeles, CA", metric: "+8.2% traffic", trend: "up" as const },
  { region: "Austin, TX", metric: "+15.1% signups", trend: "up" as const },
]

const lowPerforming = [
  { region: "Detroit, MI", metric: "-3.2% conv. rate", trend: "down" as const },
  { region: "Cleveland, OH", metric: "-5.8% traffic", trend: "down" as const },
  { region: "Memphis, TN", metric: "-2.1% signups", trend: "down" as const },
]

export function GeoTracking() {
  return (
    <div className="flex flex-col gap-6">
      {/* Traffic by State */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-2 pb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-card-foreground">
            Traffic by State
          </h2>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stateData} layout="vertical">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(230 10% 90%)"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 12, fill: "hsl(230 10% 50%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: "hsl(230 10% 50%)" }}
                axisLine={false}
                tickLine={false}
                width={90}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid hsl(230 10% 90%)",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              />
              <Bar dataKey="visitors" fill="#ec4899" radius={[0, 4, 4, 0]} name="Visitors" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Traffic by City + Conversion Rate */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="pb-4 text-lg font-semibold text-card-foreground">
            Traffic by City
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">City</th>
                  <th className="pb-3 font-medium">State</th>
                  <th className="pb-3 text-right font-medium">Visitors</th>
                  <th className="pb-3 text-right font-medium">Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {cityData.map((row) => (
                  <tr
                    key={row.city}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 font-medium text-card-foreground">
                      {row.city}
                    </td>
                    <td className="py-3 text-muted-foreground">{row.state}</td>
                    <td className="py-3 text-right text-card-foreground">
                      {row.visitors.toLocaleString()}
                    </td>
                    <td className="py-3 text-right">
                      <span
                        className={
                          row.convRate >= 7
                            ? "font-semibold text-emerald-600"
                            : "text-card-foreground"
                        }
                      >
                        {row.convRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High / Low performing regions */}
        <div className="flex flex-col gap-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2 pb-4">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
              <h2 className="text-lg font-semibold text-card-foreground">
                High-Performing Regions
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {highPerforming.map((item) => (
                <li
                  key={item.region}
                  className="flex items-center justify-between rounded-md bg-emerald-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-emerald-900">
                    {item.region}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600">
                    {item.metric}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2 pb-4">
              <TrendingDown className="h-5 w-5 text-red-500" />
              <h2 className="text-lg font-semibold text-card-foreground">
                Low-Performing Regions
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {lowPerforming.map((item) => (
                <li
                  key={item.region}
                  className="flex items-center justify-between rounded-md bg-red-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-red-900">
                    {item.region}
                  </span>
                  <span className="text-sm font-semibold text-red-600">
                    {item.metric}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
