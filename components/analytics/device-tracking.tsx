"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { Monitor, Smartphone, Tablet } from "lucide-react"

const deviceData = [
  { name: "Mobile", value: 6240, color: "#ec4899", icon: Smartphone },
  { name: "Desktop", value: 3810, color: "#f472b6", icon: Monitor },
  { name: "Tablet", value: 950, color: "#ab47bc", icon: Tablet },
]

const browserData = [
  { name: "Chrome", sessions: 5420 },
  { name: "Safari", sessions: 2810 },
  { name: "Firefox", sessions: 1350 },
  { name: "Edge", sessions: 980 },
  { name: "Other", sessions: 440 },
]

const total = deviceData.reduce((s, d) => s + d.value, 0)

export function DeviceTracking() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {/* Device Breakdown */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="pb-4 text-lg font-semibold text-card-foreground">
          Device Breakdown
        </h2>
        <div className="flex items-center gap-8">
          <div className="h-52 w-52 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {deviceData.map((entry) => (
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
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="flex flex-1 flex-col gap-4">
            {deviceData.map((d) => {
              const Icon = d.icon
              const pct = ((d.value / total) * 100).toFixed(1)
              return (
                <li key={d.name} className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: d.color + "18" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: d.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-card-foreground">
                        {d.name}
                      </span>
                      <span className="text-sm font-semibold text-card-foreground">
                        {pct}%
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-secondary">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: d.color,
                        }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Browser Distribution */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="pb-4 text-lg font-semibold text-card-foreground">
          Browser Distribution
        </h2>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={browserData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(230 10% 90%)"
              />
              <XAxis
                dataKey="name"
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
              <Bar
                dataKey="sessions"
                fill="#f472b6"
                radius={[4, 4, 0, 0]}
                name="Sessions"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
