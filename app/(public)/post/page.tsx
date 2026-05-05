"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Camera, Video, Dog } from "lucide-react"
import { VideoUploader } from "@/components/video-uploader"
import { PhotoUploader } from "@/components/photo-uploader"
import { ZipcodeLookup } from "@/components/zipcode-lookup"
import { US_STATES } from "@/lib/us-states"
import type { ZipLookupResult } from "@/lib/zipcode-db"

export default function PostListingPage() {
  const [charCount, setCharCount] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState<ZipLookupResult | null>(null)
  const [selectedState, setSelectedState] = useState("")

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
      {/* Banner */}
      <div className="rounded-md bg-pink-400 px-6 py-3 mb-8">
        <h1 className="text-xl font-extrabold text-foreground">POST FREE AD</h1>
      </div>

      {/* Featured Listing Preview */}
      <div className="mb-8 rounded-lg bg-pink-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">
          All ads are now FREE on PawFinder!
        </h2>
        <div className="flex gap-6 items-start flex-col sm:flex-row">
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-md bg-muted">
            <Dog className="h-12 w-12 text-muted-foreground" />
          </div>
          <div>
            <p className="font-bold text-foreground">Lisa, 29</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm text-green-600"><CheckCircle className="h-4 w-4" /> Verified</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground"><Camera className="h-3.5 w-3.5" /> 4</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground"><Video className="h-3.5 w-3.5" /> 1</span>
              <Badge className="bg-green-600 text-card hover:bg-green-700 text-xs">AVAILABLE NOW</Badge>
            </div>
            <p className="mt-2 text-sm font-bold text-foreground">AKC Champion Bloodline Golden Retriever Puppies</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {"Beautiful litter of 6 Golden Retriever puppies from health-tested champion parents. All puppies come with first vaccinations, deworming, microchip, and a 2-year health guarantee..."}
            </p>
          </div>
        </div>
        <ul className="mt-4 flex flex-col gap-1 text-sm text-card-foreground">
          <li>Unlimited reposts - bump your ad to the top for free</li>
          <li>{'Get the "Available Now" icon with every repost'}</li>
          <li>Display your contact details - free</li>
          <li>Unlimited location changes - free</li>
        </ul>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        {/* Location - Zip Code Lookup */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Your Location (Zip Code or City)</Label>
            <ZipcodeLookup
              placeholder="Enter your zip code or city name..."
              onLocationSelect={(result) => {
                setSelectedLocation(result)
                setSelectedState(result.state)
              }}
              className="w-full"
              size="md"
            />
            <p className="text-xs text-muted-foreground italic">
              Enter your 5-digit zip code for accurate city/state mapping across all 50 US states
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="state">State</Label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select state...</option>
                {US_STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name} ({s.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={selectedLocation?.city || ""}
                readOnly={!!selectedLocation}
                placeholder="Auto-filled from zip code"
                className={selectedLocation ? "bg-muted" : ""}
              />
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="type">Listing Type</Label>
          <select id="type" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>Puppy for Sale</option>
            <option>Adult Dog for Sale</option>
            <option>Rescue / Adoption</option>
            <option>Breeder Listing</option>
          </select>
        </div>

        {/* Name / Contact */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Dog Name</Label>
            <Input id="name" placeholder="e.g. Bella" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="breed">Breed</Label>
            <Input id="breed" placeholder="e.g. Golden Retriever" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Optional (displayed on ad)" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Optional (for email replies)" />
          </div>
        </div>

        {/* Ad Title */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Ad Title</Label>
          <Textarea
            id="title"
            placeholder="Put as much information as possible here (200 characters max)"
            maxLength={200}
            onChange={(e) => setCharCount(e.target.value.length)}
            rows={2}
          />
          <p className="text-xs text-muted-foreground italic">{charCount}/200 characters</p>
        </div>

        {/* Ad Description */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Ad Description</Label>
          <Textarea
            id="description"
            placeholder="Describe the dog's temperament, health history, vaccinations, training, and why they'd make a great companion. The more detail the better!"
            rows={6}
          />
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="e.g. 8 weeks, 2 years" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="gender">Gender</Label>
            <select id="gender" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="size">Size</Label>
            <Input id="size" placeholder="e.g. Small, Medium, Large" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="color">Color</Label>
            <Input id="color" placeholder="e.g. Golden, Black and Tan" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="temperament">Temperament</Label>
            <Input id="temperament" placeholder="e.g. Friendly, Active" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="e.g. $1,200 or Adoption Fee: $150" />
        </div>

        {/* Photos */}
        <PhotoUploader />

        {/* Videos */}
        <VideoUploader />

        <Button type="submit" size="lg" className="mt-2 bg-foreground text-background hover:bg-foreground/90">
          Submit Listing
        </Button>
      </form>
    </div>
  )
}
