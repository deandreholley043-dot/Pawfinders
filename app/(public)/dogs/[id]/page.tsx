"use client"

import { use, useState } from "react"
import Link from "next/link"
import { sampleDogs } from "@/lib/sample-dogs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Camera,
  Video,
  CheckCircle,
  Phone,
  Flag,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react"

const dogImages: Record<string, string[]> = {
  "Golden Retriever": [
    "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1625316708582-7c38734be13c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585584114963-503344a119b0?w=600&h=600&fit=crop",
  ],
  "German Shepherd": [
    "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1568572933382-74d440642b55?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1537151608828-ea2b11305ee2?w=600&h=600&fit=crop",
  ],
  "Labrador Retriever": [
    "https://images.unsplash.com/photo-1579296312150-c0c0d0b3d44c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1602099861186-3e531c4d4733?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop",
  ],
  "French Bulldog": [
    "https://images.unsplash.com/photo-1583337130417-13104dec14a1?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1612940960267-4549a58fb257?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585764968547-fa5398b50cf3?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1575364289437-fb1479d52732?w=600&h=600&fit=crop",
  ],
  "Husky": [
    "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1617895153857-3cfe89f71c00?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587559045816-8b0a54d1d66b?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616956295685-af94472a7e07?w=600&h=600&fit=crop",
  ],
  "Beagle": [
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1528246475760-e1a090d1e46f?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553698861-7c0bfb98f tried?w=600&h=600&fit=crop",
  ],
  "Poodle (Standard)": [
    "https://images.unsplash.com/photo-1616149256061-ec535dc4e08f?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600804340584-c7db2eacf0b4?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587463277057-81e7b9a3ee2a?w=600&h=600&fit=crop",
  ],
  "Mixed Breed": [
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?w=600&h=600&fit=crop",
  ],
  "Dachshund": [
    "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501472312651-726afe119be1?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop",
  ],
}

export default function DogProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const dog = sampleDogs.find((d) => d.id === id)

  if (!dog) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <h1 className="text-2xl font-bold text-foreground">Dog not found</h1>
        <Link href="/" className="mt-4 inline-block text-primary hover:underline">
          Back to listings
        </Link>
      </div>
    )
  }

  const images = (dogImages[dog.breed] || dogImages["Mixed Breed"]).slice(0, 6)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link href="/" className="text-primary hover:underline">USA Dogs</Link>
        <span className="text-muted-foreground">&#187;</span>
        <Link href="/" className="text-primary hover:underline">{dog.location}</Link>
        <span className="text-muted-foreground">&#187;</span>
        <span className="text-muted-foreground">{dog.name}, {dog.age}</span>
      </div>

      {/* Back link */}
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-background bg-foreground px-3 py-1.5 rounded hover:opacity-90 transition-opacity">
        <ArrowLeft className="h-4 w-4" />
        Back to Listings
      </Link>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* Left column - details */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold uppercase text-rose-600">
            {dog.name}, {dog.age}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{dog.breed}</p>

          {/* Contact */}
          <div className="mt-4">
            <p className="font-bold text-foreground">Call me</p>
            <a href={`tel:${dog.phone}`} className="text-primary hover:underline">{dog.phone}</a>
            <p className="mt-1 text-sm text-muted-foreground">
              Please mention that you found this on PawFinder
            </p>
          </div>

          {/* Badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {dog.verified && (
              <span className="flex items-center gap-1 text-sm text-green-600 font-medium">
                <CheckCircle className="h-4 w-4" /> Verified
              </span>
            )}
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Camera className="h-4 w-4" /> {dog.photoCount}
            </span>
            {dog.videoCount > 0 && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Video className="h-4 w-4" /> {dog.videoCount}
              </span>
            )}
            {dog.availableNow && (
              <Badge className="bg-green-600 text-card hover:bg-green-700">AVAILABLE NOW</Badge>
            )}
          </div>

          {/* Ad Description */}
          <div className="mt-6">
            <div className="rounded-t-md bg-pink-400 px-4 py-2">
              <h2 className="font-bold text-foreground">Ad Description</h2>
            </div>
            <div className="rounded-b-md bg-pink-50 px-4 py-4">
              <p className="text-sm leading-relaxed text-card-foreground">{dog.description}</p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="mt-6">
            <div className="rounded-t-md bg-pink-400 px-4 py-2">
              <h2 className="font-bold text-foreground">Details</h2>
            </div>
            <div className="rounded-b-md bg-pink-50 px-4 py-4">
              <dl className="grid grid-cols-2 gap-y-2 text-sm">
                <dt className="font-medium text-card-foreground">Breed</dt>
                <dd className="text-card-foreground">{dog.breed}</dd>
                <dt className="font-medium text-card-foreground">Age</dt>
                <dd className="text-card-foreground">{dog.age}</dd>
                <dt className="font-medium text-card-foreground">Gender</dt>
                <dd className="capitalize text-card-foreground">{dog.gender}</dd>
                <dt className="font-medium text-card-foreground">Size</dt>
                <dd className="text-card-foreground">{dog.size}</dd>
                <dt className="font-medium text-card-foreground">Color</dt>
                <dd className="text-card-foreground">{dog.color}</dd>
                <dt className="font-medium text-card-foreground">Temperament</dt>
                <dd className="text-card-foreground">{dog.temperament}</dd>
                <dt className="font-medium text-card-foreground">Price</dt>
                <dd className="font-bold text-card-foreground">{dog.price}</dd>
                <dt className="font-medium text-card-foreground">Location</dt>
                <dd className="text-card-foreground">{dog.location}, {dog.state}</dd>
                <dt className="font-medium text-card-foreground">Category</dt>
                <dd className="capitalize text-card-foreground">{dog.category}</dd>
              </dl>
            </div>
          </div>

          {/* Report */}
          <button className="mt-4 flex items-center gap-1 text-sm text-destructive hover:underline">
            <Flag className="h-3.5 w-3.5" /> Report this listing
          </button>

          {/* Reviews Section */}
          <div className="mt-8">
            <div className="rounded-t-md bg-pink-400 px-4 py-2">
              <h2 className="font-bold text-foreground">Reviews</h2>
            </div>
            <div className="rounded-b-md bg-pink-50 px-4 py-4">
              <Button variant="outline" size="sm" className="border-foreground bg-foreground text-background hover:bg-foreground/90 hover:text-background">
                Add Review
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">No reviews yet.</p>
            </div>
          </div>
        </div>

        {/* Right column - photos & videos */}
        <div className="w-full lg:w-[420px]">
          <div className="grid grid-cols-2 gap-3">
            {images.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-md bg-muted"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={src}
                  alt={`${dog.name} photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/20">
                  <ZoomIn className="h-8 w-8 text-background opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-1.5 right-1.5 rounded bg-foreground/70 px-1.5 py-0.5 text-[10px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {i + 1}/{images.length}
                </div>
              </div>
            ))}
          </div>

          {/* Video clips */}
          {dog.videoCount > 0 && (
            <div className="mt-6">
              <div className="rounded-t-md bg-pink-400 px-4 py-2">
                <h2 className="flex items-center gap-2 font-bold text-foreground">
                  <Video className="h-4 w-4" />
                  Video Clips ({dog.videoCount})
                </h2>
              </div>
              <div className="rounded-b-md bg-pink-50 p-4">
                <div className="grid gap-3">
                  {Array.from({ length: Math.min(dog.videoCount, 3) }).map((_, i) => (
                    <div
                      key={i}
                      className="relative flex items-center gap-3 rounded-md border border-border bg-card p-3"
                    >
                      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded bg-foreground/5">
                        <Video className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium text-card-foreground">
                          {dog.name} - Clip {i + 1}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          30s max &middot; MP4 / MOV / MPEG / AVI
                        </p>
                        <span className="inline-flex w-fit items-center rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                          Video available
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && images[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main image */}
            <img
              src={images[lightboxIndex]}
              alt={`${dog.name} photo ${lightboxIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
              crossOrigin="anonymous"
            />

            {/* Close */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute -right-3 -top-3 h-9 w-9 rounded-full shadow-lg"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-lg transition-colors hover:bg-card"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + images.length) % images.length
                  )
                }
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-lg transition-colors hover:bg-card"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % images.length)
                }
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            )}

            {/* Info bar */}
            <div className="mt-3 flex items-center gap-4 rounded-md bg-card px-4 py-2 shadow-lg">
              <p className="text-sm font-bold text-card-foreground">
                {dog.name} &mdash; {dog.breed}
              </p>
              <p className="text-xs text-muted-foreground">
                Photo {lightboxIndex + 1} of {images.length}
              </p>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`h-14 w-14 overflow-hidden rounded-md border-2 transition-all ${
                      i === lightboxIndex
                        ? "border-primary shadow-lg"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
