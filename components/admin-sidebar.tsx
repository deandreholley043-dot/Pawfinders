"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Mail,
  Image,
  Database,
  BarChart3,
  Shield,
  MapPin,
  Settings,
  Tag,
  Home,
  Search,
  BookOpen,
  User,
  Heart,
  StickyNote,
  Camera,
  Video,
  LogOut,
} from "lucide-react"

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Listings Management", href: "/admin/members", icon: Users },
  { label: "Media Library", href: "/admin/media", icon: Image },
  { label: "Media Database (SEO)", href: "/admin/media-seo", icon: Database },
  { label: "Analytics & Statistics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Content Moderation", href: "/admin/moderation", icon: Shield },
  { label: "Regions & Categories", href: "/admin/regions", icon: MapPin },
  { label: "Site Settings", href: "/admin/settings", icon: Settings },
  { label: "Attribute Labels", href: "/admin/attributes", icon: Tag },
]

const userLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Browse Listings", href: "/", icon: Search },
  { label: "Post Free Ad", href: "/post", icon: BookOpen },
  { label: "My Account", href: "/user/account", icon: User },
  { label: "My Favorites", href: "/user/favorites", icon: Heart },
  { label: "My Notes", href: "/user/notes", icon: StickyNote },
  { label: "Photos", href: "/user/photos", icon: Camera },
  { label: "Videos", href: "/user/videos", icon: Video },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  function handleLogout() {
    document.cookie = "admin_auth=; path=/; max-age=0"
    router.push("/admin/login")
  }

  return (
    <aside className="flex w-64 min-w-64 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="flex h-16 items-center px-6 bg-primary">
        <h1 className="text-lg font-bold text-primary-foreground tracking-wide">
          Admin Panel
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Admin Management Section */}
        <div className="px-6 pb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Admin Management
          </p>
        </div>
        <ul className="flex flex-col">
          {adminLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-2.5 text-sm transition-colors border-l-3 border-transparent",
                    isActive
                      ? "border-l-primary text-primary font-semibold bg-sidebar-accent"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-primary"
                  )}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Divider */}
        <div className="my-4 border-t border-border" />

        {/* User Features Section */}
        <div className="px-6 pb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            User Features
          </p>
        </div>
        <ul className="flex flex-col">
          {userLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-2.5 text-sm transition-colors border-l-3 border-transparent",
                    isActive
                      ? "border-l-primary text-primary font-semibold bg-sidebar-accent"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-primary"
                  )}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-border p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
