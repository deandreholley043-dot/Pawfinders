"use client"

import { useState, useMemo } from "react"
import { sampleDogs } from "@/lib/sample-dogs"
import { DogListingCard } from "@/components/dog-listing-card"
import { CategoryFilters } from "@/components/category-filters"
import { US_STATES } from "@/lib/us-states"
import { MapPin, Filter, X, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BrowsePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Get unique cities from sample data based on selected state
  const cities = useMemo(() => {
    if (!selectedState) return []
    const stateDogs = sampleDogs.filter((d) => d.state === selectedState)
    return [...new Set(stateDogs.map((d) => d.city))].sort()
  }, [selectedState])

  // Filter dogs
  const filteredDogs = useMemo(() => {
    return sampleDogs.filter((dog) => {
      const categoryMatch =
        activeCategory === "all" || dog.category === activeCategory
      const stateMatch = !selectedState || dog.state === selectedState
      const cityMatch = !selectedCity || dog.city === selectedCity
      return categoryMatch && stateMatch && cityMatch
    })
  }, [activeCategory, selectedState, selectedCity])

  // Count dogs per state for the dropdown
  const stateCountMap = useMemo(() => {
    const map: Record<string, number> = {}
    sampleDogs.forEach((d) => {
      map[d.state] = (map[d.state] || 0) + 1
    })
    return map
  }, [])

  // Only show states that have dogs
  const statesWithDogs = US_STATES.filter((s) => stateCountMap[s.code])

  const clearFilters = () => {
    setSelectedState("")
    setSelectedCity("")
    setActiveCategory("all")
  }

  const activeFiltersCount =
    (selectedState ? 1 : 0) +
    (selectedCity ? 1 : 0) +
    (activeCategory !== "all" ? 1 : 0)

  const stateName = selectedState
    ? US_STATES.find((s) => s.code === selectedState)?.name
    : null

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Title and state info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Dogs in{" "}
            <span className="text-primary">
              {stateName || "USA"}
              {selectedCity && `, ${selectedCity}`}
            </span>
          </h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {selectedState
              ? `Browse dog listings from trusted breeders, shelters, and owners in ${stateName}${selectedCity ? `, ${selectedCity}` : ""}.`
              : "Find puppies, rescues, and dogs for adoption across all 50 US states."}
          </p>
        </div>

        {/* Filters bar */}
        <div className="mb-6 flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* State filter */}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value)
                  setSelectedCity("")
                }}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">All States ({sampleDogs.length})</option>
                {statesWithDogs.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name} ({stateCountMap[state.code]})
                  </option>
                ))}
              </select>
            </div>

            {/* City filter (only if state selected) */}
            {selectedState && cities.length > 0 && (
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            )}

            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              size="sm"
              className="ml-auto sm:hidden"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className="mr-1.5 h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-1.5 h-5 w-5 rounded-full bg-primary p-0 text-[10px]">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            {/* Clear filters */}
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="mr-1 h-4 w-4" />
                Clear all
              </Button>
            )}

            {/* View toggle - desktop */}
            <div className="ml-auto hidden items-center gap-1 rounded-md border border-border p-0.5 sm:flex">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded p-1.5 ${viewMode === "grid" ? "bg-muted" : ""}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded p-1.5 ${viewMode === "list" ? "bg-muted" : ""}`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category filters */}
          <div className={showMobileFilters ? "block" : "hidden sm:block"}>
            <CategoryFilters active={activeCategory} onSelect={setActiveCategory} />
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredDogs.length} listing{filteredDogs.length !== 1 ? "s" : ""} found
          {stateName && ` in ${stateName}`}
          {selectedCity && `, ${selectedCity}`}
        </p>

        {/* Listings grid */}
        {filteredDogs.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDogs.map((dog) => (
                <DogListingCard key={dog.id} dog={dog} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredDogs.map((dog) => (
                <DogListingCard key={dog.id} dog={dog} />
              ))}
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <MapPin className="mb-3 h-12 w-12 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold text-foreground">
              No listings found
            </h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Try adjusting your filters or check back later for new listings in
              this area.
            </p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
