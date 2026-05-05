import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-primary hover:underline">Home</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary hover:underline">Terms and Conditions</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary hover:underline">Privacy Policy</Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary hover:underline">FAQ</Link>
            <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary hover:underline">Disclaimer</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline">Contact Us</Link>
            <Link href="/post" className="text-sm text-muted-foreground hover:text-primary hover:underline">Advertise With Us</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline">Support</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              PawFinder connects loving families with dogs looking for their forever home. All listings are verified by our team.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Report suspicious listings to help keep our community safe.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {'PawFinder 2026. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
