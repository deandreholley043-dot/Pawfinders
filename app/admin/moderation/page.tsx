import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"

const queues = [
  { label: "Flagged Content", count: 0, color: "bg-[#ffebee] text-[#ef5350]" },
  { label: "Pending Reviews", count: 0, color: "bg-[#fff8e1] text-[#ffa726]" },
  { label: "Reported Users", count: 0, color: "bg-[#fce4ec] text-[#ec4899]" },
]

export default function ModerationPage() {
  return (
    <PageShell
      title="Content Moderation"
      description="Review flagged content, reported users, and pending approvals."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {queues.map((q) => (
          <div
            key={q.label}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-5"
          >
            <span className="text-sm font-medium text-card-foreground">{q.label}</span>
            <Badge className={q.color}>{q.count}</Badge>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card px-6 py-16">
        <p className="text-sm text-muted-foreground">No items require moderation.</p>
      </div>
    </PageShell>
  )
}
