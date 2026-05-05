import { PageShell } from "@/components/page-shell"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <PageShell
        title="My Account"
        description="Manage your profile and account settings."
      >
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="admin" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="admin@example.com" />
          </div>
          <Button className="self-start">Update Profile</Button>
        </div>
      </PageShell>
    </div>
  )
}
