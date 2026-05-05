const recentListings = [
  { name: "Bella - Golden Retriever", location: "Austin, TX", time: "2 hours ago" },
  { name: "Max - German Shepherd", location: "Dallas, TX", time: "5 hours ago" },
  { name: "Rocky - French Bulldog", location: "San Antonio, TX", time: "3 hours ago" },
]

export function RecentReviews() {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-lg font-bold text-card-foreground">Recent Listings</h2>
      </div>
      <div className="flex flex-col divide-y divide-border">
        {recentListings.map((listing) => (
          <div key={listing.name} className="flex items-center justify-between px-6 py-3">
            <div>
              <p className="text-sm font-medium text-card-foreground">{listing.name}</p>
              <p className="text-xs text-muted-foreground">{listing.location}</p>
            </div>
            <p className="text-xs text-muted-foreground">{listing.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
