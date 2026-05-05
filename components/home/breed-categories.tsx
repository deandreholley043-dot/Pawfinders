import Link from "next/link"
import { Dog, Heart, Shield, Award, Baby, Sparkles } from "lucide-react"

const categories = [
  {
    label: "Puppies",
    description: "8 weeks to 6 months",
    icon: Baby,
    color: "bg-rose-50 text-rose-600 border-rose-200",
    iconBg: "bg-rose-100",
    href: "/browse?category=puppy",
  },
  {
    label: "Adult Dogs",
    description: "1 year and older",
    icon: Dog,
    color: "bg-pink-50 text-pink-600 border-pink-200",
    iconBg: "bg-pink-100",
    href: "/browse?category=adult",
  },
  {
    label: "Rescues",
    description: "Dogs needing homes",
    icon: Heart,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    iconBg: "bg-emerald-100",
    href: "/browse?category=rescue",
  },
  {
    label: "Breeders",
    description: "Registered breeders",
    icon: Award,
    color: "bg-pink-50 text-pink-600 border-pink-200",
    iconBg: "bg-pink-100",
    href: "/browse?category=breeder",
  },
  {
    label: "Verified",
    description: "ID-verified listers",
    icon: Shield,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    iconBg: "bg-indigo-100",
    href: "/browse?verified=true",
  },
  {
    label: "New Today",
    description: "Just posted",
    icon: Sparkles,
    color: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
    iconBg: "bg-fuchsia-100",
    href: "/browse?sort=newest",
  },
]

export function BreedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
          Browse by Category
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Find exactly what you are looking for
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className={`flex flex-col items-center gap-3 rounded-xl border p-6 transition-all hover:shadow-md hover:-translate-y-0.5 ${cat.color}`}
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${cat.iconBg}`}>
              <cat.icon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">{cat.label}</p>
              <p className="mt-0.5 text-xs opacity-70">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
