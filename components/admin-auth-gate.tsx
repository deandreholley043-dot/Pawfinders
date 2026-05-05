"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Dog } from "lucide-react"

export function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false)
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    // Skip gate on login page
    if (pathname === "/admin/login") {
      setChecked(true)
      setAuthed(true)
      return
    }

    const hasAuth = document.cookie.split(";").some((c) => c.trim().startsWith("admin_auth=true"))
    if (!hasAuth) {
      router.replace("/admin/login")
    } else {
      setAuthed(true)
    }
    setChecked(true)
  }, [pathname, router])

  if (!checked || !authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-primary/20">
            <Dog className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
