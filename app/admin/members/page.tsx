import { PageShell } from "@/components/page-shell"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const listings = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    age: "8 weeks",
    location: "Austin, TX",
    category: "Puppy",
    status: "Active",
    verified: true,
    posted: "2026-02-14",
  },
  {
    id: 2,
    name: "Max",
    breed: "German Shepherd",
    age: "2 years",
    location: "Dallas, TX",
    category: "Adult",
    status: "Active",
    verified: true,
    posted: "2026-02-14",
  },
  {
    id: 3,
    name: "Daisy",
    breed: "Labrador Retriever",
    age: "1 year",
    location: "Houston, TX",
    category: "Rescue",
    status: "Pending",
    verified: false,
    posted: "2026-02-13",
  },
  {
    id: 4,
    name: "Rocky",
    breed: "French Bulldog",
    age: "12 weeks",
    location: "San Antonio, TX",
    category: "Breeder",
    status: "Active",
    verified: true,
    posted: "2026-02-14",
  },
  {
    id: 5,
    name: "Luna",
    breed: "Husky",
    age: "6 months",
    location: "Plano, TX",
    category: "Puppy",
    status: "Active",
    verified: true,
    posted: "2026-02-14",
  },
  {
    id: 6,
    name: "Cooper",
    breed: "Beagle",
    age: "3 years",
    location: "Fort Worth, TX",
    category: "Adult",
    status: "Pending",
    verified: false,
    posted: "2026-02-12",
  },
]

export default function ListingsPage() {
  return (
    <PageShell
      title="Listings Management"
      description="View and manage all dog listings on the platform."
    >
      <div className="flex items-center gap-4">
        <Input placeholder="Search listings..." className="max-w-sm bg-card" />
        <Button>Search</Button>
      </div>
      <div className="rounded-lg border border-border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Breed</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Posted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell className="font-medium">{listing.id}</TableCell>
                <TableCell className="font-medium">{listing.name}</TableCell>
                <TableCell>{listing.breed}</TableCell>
                <TableCell>{listing.age}</TableCell>
                <TableCell>{listing.location}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{listing.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={listing.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-pink-100 text-pink-700"}>
                    {listing.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {listing.verified ? (
                    <Badge className="bg-emerald-100 text-emerald-700">Yes</Badge>
                  ) : (
                    <Badge variant="outline">No</Badge>
                  )}
                </TableCell>
                <TableCell>{listing.posted}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">Remove</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageShell>
  )
}
