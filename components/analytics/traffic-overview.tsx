"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const trafficData = [
  { date: "Mon", visitors: 1240, pageViews: 3120, sessions: 1580 },
  { date: "Tue", visitors: 1380, pageViews: 3480, sessions: 1720 },
  { date: "Wed", visitors: 1520, pageViews: 3910, sessions: 1890 },
  { date: "Thu", visitors: 1410, pageViews: 3650, sessions: 1780 },
  { date: "Fri", visitors: 1690, pageViews: 4210, sessions: 2050 },
  { date: "Sat", visitors: 980, pageViews: 2340, sessions: 1190 },
  { date: "Sun", visitors: 870, pageViews: 2010, sessions: 1050 },
]

export function TrafficOverview() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-lg font-semibold text-card-foreground">
          Traffic Overview
        </h2>
        <span className="text-xs text-muted-foreground">Last 7 days</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ab47bc" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ab47bc" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 10% 90%)" />
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
            <Area
              type="monotone"
              dataKey="pageViews"
              stroke="#ab47bc"
              fill="url(#colorPageViews)"
              strokeWidth={2}
              name="Page Views"
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#ec4899"
              fill="url(#colorVisitors)"
              strokeWidth={2}
              name="Visitors"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
