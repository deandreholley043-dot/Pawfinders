"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Dog } from "lucide-react"

const ADMIN_USER = "admin"
const ADMIN_PASS = "admin123"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    setTimeout(() => {
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        document.cookie = "admin_auth=true; path=/; max-age=86400"
        router.push("/admin")
        router.refresh()
      } else {
        setError("Invalid username or password.")
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Logo area */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
            <Dog className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to manage PawFinder</p>
          </div>
        </div>

        {/* Login card */}
        <div className="rounded-lg border border-border bg-card p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2">
                <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>

        {/* Test credentials hint */}
        <div className="mt-4 rounded-md border border-border bg-muted/50 px-4 py-3">
          <p className="text-xs font-medium text-muted-foreground">Test Credentials</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Username: <span className="font-mono text-foreground">admin</span> &nbsp;/&nbsp; Password: <span className="font-mono text-foreground">admin123</span>
          </p>
        </div>
      </div>
    </div>
  )
}
