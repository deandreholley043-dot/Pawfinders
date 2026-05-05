import Link from "next/link"
import { sampleDogs } from "@/lib/sample-dogs"
import { DogListingCard } from "@/components/dog-listing-card"
import { ArrowRight } from "lucide-react"

export function FeaturedListings() {
  const featured = sampleDogs.filter((d) => d.verified).slice(0, 6)

  return (
    <section className="bg-secondary/50 py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
              Featured Listings
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hand-picked verified listings from trusted sources
            </p>
          </div>
          <Link
            href="/browse"
            className="hidden items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:flex"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dog) => (
            <DogListingCard key={dog.id} dog={dog} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/browse"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View All Listings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
