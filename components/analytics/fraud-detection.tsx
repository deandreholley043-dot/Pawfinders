import {
  ShieldAlert,
  Bug,
  Ban,
  AlertTriangle,
  Eye,
  CheckCircle2,
} from "lucide-react"

const threats = [
  {
    label: "Flagged IPs",
    value: 12,
    severity: "high",
    icon: Ban,
    color: "#ef4444",
    bgColor: "bg-red-50",
  },
  {
    label: "Spam Accounts",
    value: 8,
    severity: "medium",
    icon: Bug,
    color: "#f59e0b",
    bgColor: "bg-pink-50",
  },
  {
    label: "Suspicious Activity",
    value: 23,
    severity: "medium",
    icon: AlertTriangle,
    color: "#f59e0b",
    bgColor: "bg-pink-50",
  },
  {
    label: "Abuse Reports",
    value: 5,
    severity: "high",
    icon: ShieldAlert,
    color: "#ef4444",
    bgColor: "bg-red-50",
  },
]

const recentFlags = [
  {
    type: "Spam",
    detail: "User 'xbot_42' posted 18 duplicate reviews in 2 minutes",
    time: "12 min ago",
    status: "pending",
  },
  {
    type: "Abuse",
    detail: "Reported profile contains offensive content",
    time: "34 min ago",
    status: "pending",
  },
  {
    type: "Fraud",
    detail: "Multiple accounts created from IP 192.168.x.x",
    time: "1 hr ago",
    status: "reviewing",
  },
  {
    type: "Spam",
    detail: "Bot-like behavior detected on message board",
    time: "2 hrs ago",
    status: "resolved",
  },
  {
    type: "Abuse",
    detail: "User flagged for harassing private messages",
    time: "3 hrs ago",
    status: "reviewing",
  },
]

const statusStyles: Record<string, string> = {
  pending: "bg-red-100 text-red-700",
  reviewing: "bg-pink-100 text-pink-700",
  resolved: "bg-emerald-100 text-emerald-700",
}

const statusIcons: Record<string, typeof Eye> = {
  pending: AlertTriangle,
  reviewing: Eye,
  resolved: CheckCircle2,
}

export function FraudDetection() {
  return (
    <div className="flex flex-col gap-6">
      {/* Threat summary cards */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {threats.map((t) => {
          const Icon = t.icon
          return (
            <div
              key={t.label}
              className={`flex items-center gap-3 rounded-lg border border-border p-4 ${t.bgColor}`}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white"
              >
                <Icon className="h-5 w-5" style={{ color: t.color }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t.label}</p>
                <p className="text-xl font-bold" style={{ color: t.color }}>
                  {t.value}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent flags table */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="pb-4 text-lg font-semibold text-card-foreground">
          Recent Flags
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Detail</th>
                <th className="pb-3 font-medium">Time</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentFlags.map((f, i) => {
                const StatusIcon = statusIcons[f.status]
                return (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 font-medium text-card-foreground">
                      {f.type}
                    </td>
                    <td className="max-w-xs truncate py-3 text-muted-foreground">
                      {f.detail}
                    </td>
                    <td className="py-3 text-muted-foreground">{f.time}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[f.status]}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {f.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
