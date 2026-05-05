"use client"

import { cn } from "@/lib/utils"

const categories = [
  { label: "ALL DOGS", value: "all", color: "bg-foreground text-background" },
  { label: "PUPPIES", value: "puppy", color: "bg-rose-400 text-card" },
  { label: "ADULT DOGS", value: "adult", color: "bg-pink-400 text-card-foreground" },
  { label: "RESCUES", value: "rescue", color: "bg-green-500 text-card" },
  { label: "BREEDERS", value: "breeder", color: "bg-pink-500 text-card" },
]

interface CategoryFiltersProps {
  active: string
  onSelect: (value: string) => void
}

export function CategoryFilters({ active, onSelect }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={cn(
            "rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-all",
            active === cat.value
              ? cn(cat.color, "shadow-md scale-105")
              : "bg-muted text-muted-foreground hover:bg-muted/70"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
