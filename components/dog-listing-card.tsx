import Link from "next/link"
import { Camera, Video, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { DogListing } from "@/lib/sample-dogs"

// Placeholder images using Unsplash dog photos
const dogImages: Record<string, string> = {
  "Golden Retriever": "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop",
  "German Shepherd": "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
  "Labrador Retriever": "https://images.unsplash.com/photo-1579296312150-c0c0d0b3d44c?w=400&h=400&fit=crop",
  "French Bulldog": "https://images.unsplash.com/photo-1583337130417-13104dec14a1?w=400&h=400&fit=crop",
  "Husky": "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
  "Beagle": "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop",
  "Poodle (Standard)": "https://images.unsplash.com/photo-1616149256061-ec535dc4e08f?w=400&h=400&fit=crop",
  "Mixed Breed": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop",
  "Dachshund": "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=400&h=400&fit=crop",
}

export function DogListingCard({ dog }: { dog: DogListing }) {
  const imgSrc = dogImages[dog.breed] || "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop"

  return (
    <Link
      href={`/dogs/${dog.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={`${dog.name} - ${dog.breed}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        {dog.availableNow && (
          <Badge className="absolute right-2 top-2 bg-green-600 text-card hover:bg-green-700">
            Available Now
          </Badge>
        )}
        {dog.videoCount > 0 && (
          <div className="absolute left-2 bottom-2 flex items-center gap-1 rounded bg-foreground/70 px-1.5 py-0.5">
            <Video className="h-3 w-3 text-background" />
            <span className="text-[10px] font-medium text-background">{dog.videoCount}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 bg-pink-50 p-4">
        <h3 className="text-lg font-bold uppercase text-rose-600 leading-tight text-pretty">
          {dog.name}, {dog.age}
        </h3>
        <p className="text-xs font-medium text-muted-foreground">
          {dog.breed} &middot; {dog.location}, {dog.state}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {dog.photoCount > 0 && (
            <span className="flex items-center gap-1">
              <Camera className="h-3.5 w-3.5" /> {dog.photoCount}
            </span>
          )}
          {dog.videoCount > 0 && (
            <span className="flex items-center gap-1">
              <Video className="h-3.5 w-3.5" /> {dog.videoCount}
            </span>
          )}
          {dog.verified && (
            <span className="flex items-center gap-1 text-green-600">
              <CheckCircle className="h-3.5 w-3.5" /> Verified
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-card-foreground leading-relaxed">
          {dog.shortDescription}
        </p>
        <p className="mt-auto pt-2 text-sm font-bold text-foreground">
          {dog.price}
        </p>
      </div>
    </Link>
  )
}
