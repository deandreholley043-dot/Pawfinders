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
import { Clock, MousePointer, ArrowDownUp, ExternalLink } from "lucide-react"

const topPages = [
  { page: "/browse-reviews", views: 4820, avgTime: "3:42" },
  { page: "/search", views: 3610, avgTime: "1:58" },
  { page: "/submit-review", views: 2740, avgTime: "5:14" },
  { page: "/message-board", views: 2180, avgTime: "4:22" },
  { page: "/user/photos", views: 1920, avgTime: "2:31" },
  { page: "/user/videos", views: 1680, avgTime: "3:08" },
]

const hourlyData = [
  { hour: "12a", sessions: 120 },
  { hour: "2a", sessions: 80 },
  { hour: "4a", sessions: 45 },
  { hour: "6a", sessions: 90 },
  { hour: "8a", sessions: 280 },
  { hour: "10a", sessions: 420 },
  { hour: "12p", sessions: 510 },
  { hour: "2p", sessions: 480 },
  { hour: "4p", sessions: 390 },
  { hour: "6p", sessions: 520 },
  { hour: "8p", sessions: 680 },
  { hour: "10p", sessions: 450 },
]

const behaviorMetrics = [
  {
    label: "Avg. Session Duration",
    value: "3m 24s",
    icon: Clock,
    color: "#ec4899",
  },
  {
    label: "Bounce Rate",
    value: "34.2%",
    icon: ArrowDownUp,
    color: "#ffa726",
  },
  {
    label: "Pages per Session",
    value: "4.8",
    icon: MousePointer,
    color: "#ab47bc",
  },
  {
    label: "Exit Rate (Top)",
    value: "18.7%",
    icon: ExternalLink,
    color: "#ec407a",
  },
]

export function UserBehavior() {
  return (
    <div className="flex flex-col gap-6">
      {/* Behavior stat row */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {behaviorMetrics.map((m) => {
          const Icon = m.icon
          return (
            <div
              key={m.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: m.color + "18" }}
              >
                <Icon className="h-5 w-5" style={{ color: m.color }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <p className="text-lg font-bold text-card-foreground">
                  {m.value}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Top Landing Pages */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="pb-4 text-lg font-semibold text-card-foreground">
            Top Landing Pages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Page</th>
                  <th className="pb-3 text-right font-medium">Views</th>
                  <th className="pb-3 text-right font-medium">Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((row) => (
                  <tr
                    key={row.page}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 font-mono text-xs font-medium text-primary">
                      {row.page}
                    </td>
                    <td className="py-3 text-right text-card-foreground">
                      {row.views.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-muted-foreground">
                      {row.avgTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Peak Hours */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="pb-4 text-lg font-semibold text-card-foreground">
            Peak Activity Hours
          </h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(230 10% 90%)"
                />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 11, fill: "hsl(230 10% 50%)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "hsl(230 10% 50%)" }}
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
                  fill="#ec4899"
                  radius={[4, 4, 0, 0]}
                  name="Sessions"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
