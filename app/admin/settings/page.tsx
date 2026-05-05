import { PageShell } from "@/components/page-shell"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <PageShell
      title="Site Settings"
      description="Configure global site settings, branding, and preferences."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-card-foreground">General</h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="My Site" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="siteDesc">Site Description</Label>
            <Input id="siteDesc" defaultValue="" placeholder="A brief site description" />
          </div>
          <Button className="self-start">Save Changes</Button>
        </div>
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-card-foreground">Features</h2>
          <div className="flex items-center justify-between">
            <Label>Enable User Registration</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Enable Reviews</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Enable Forum</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Require Email Verification</Label>
            <Switch />
          </div>
          <Button className="self-start">Save Changes</Button>
        </div>
      </div>
    </PageShell>
  )
}
