"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Dog } from "lucide-react"
import { ZipcodeLookup } from "@/components/zipcode-lookup"
import type { ZipLookupResult } from "@/lib/zipcode-db"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleLocationSelect(result: ZipLookupResult) {
    router.push(`/browse?state=${result.state}&city=${encodeURIComponent(result.city)}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground text-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Dog className="h-7 w-7 text-primary" />
          <span className="text-xl font-extrabold tracking-tight">PAWFINDER</span>
        </Link>

        {/* Location bar - desktop */}
        <div className="hidden flex-1 md:flex md:max-w-sm lg:max-w-md">
          <ZipcodeLookup
            size="sm"
            placeholder="Zip code or city..."
            onLocationSelect={handleLocationSelect}
            className="w-full [&_input]:bg-background [&_input]:text-foreground"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/browse"
            className={cn(
              "text-sm font-bold tracking-wide transition-colors hover:text-primary",
              pathname === "/browse" ? "text-primary" : "text-background"
            )}
          >
            BROWSE
          </Link>
          <Link
            href="/post"
            className={cn(
              "text-sm font-bold tracking-wide transition-colors hover:text-primary",
              pathname === "/post" ? "text-primary" : "text-background"
            )}
          >
            POST FREE AD
          </Link>
          <Link
            href="/login"
            className={cn(
              "text-sm font-bold tracking-wide transition-colors hover:text-primary",
              pathname === "/login" ? "text-primary" : "text-background"
            )}
          >
            LOGIN
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-bold tracking-wide transition-colors hover:text-primary",
              pathname === "/contact" ? "text-primary" : "text-background"
            )}
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-muted-foreground/20 px-4 py-4 md:hidden">
          <div className="pb-4">
            <ZipcodeLookup
              size="sm"
              placeholder="Enter zip code or city..."
              onLocationSelect={(r) => {
                handleLocationSelect(r)
                setMobileOpen(false)
              }}
              className="w-full [&_input]:bg-background [&_input]:text-foreground"
            />
          </div>
          <nav className="flex flex-col gap-3">
            <Link href="/browse" className="text-sm font-bold tracking-wide hover:text-primary" onClick={() => setMobileOpen(false)}>BROWSE</Link>
            <Link href="/post" className="text-sm font-bold tracking-wide hover:text-primary" onClick={() => setMobileOpen(false)}>POST FREE AD</Link>
            <Link href="/login" className="text-sm font-bold tracking-wide hover:text-primary" onClick={() => setMobileOpen(false)}>LOGIN</Link>
            <Link href="/contact" className="text-sm font-bold tracking-wide hover:text-primary" onClick={() => setMobileOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
