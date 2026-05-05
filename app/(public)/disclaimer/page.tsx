import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer - PawFinder",
  description: "Important disclaimer and legal notices for the PawFinder platform.",
}

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-card-foreground">Disclaimer</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: February 14, 2026</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-secondary-foreground">
          {/* General */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">General Information</h2>
            <p>
              The information provided on PawFinder is for general informational purposes only.
              All listings, profiles, and content on this site are provided in good faith; however,
              we make no representation or warranty of any kind, express or implied, regarding the
              accuracy, adequacy, validity, reliability, availability, or completeness of any
              information on the site.
            </p>
          </section>

          {/* No Professional Advice */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Not Professional Advice</h2>
            <p>
              PawFinder does not provide veterinary, legal, or financial advice. Any information
              regarding dog breeds, health, care, or training is intended as a general guide only.
              You should consult a qualified veterinarian or professional before making decisions
              related to animal health, nutrition, or behavior.
            </p>
          </section>

          {/* Listings */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">User-Submitted Listings</h2>
            <p>
              PawFinder serves as a platform connecting dog owners, breeders, rescues, and
              adopters. All listings are created and managed by third-party users. PawFinder does
              not own, breed, sell, or rehome any dogs and is not a party to any transaction
              between users.
            </p>
            <p>
              While we make reasonable efforts to review listings and remove fraudulent or
              misleading content, we cannot guarantee the accuracy of any listing information,
              including but not limited to breed, age, health status, temperament, vaccination
              records, or pricing.
            </p>
          </section>

          {/* Verification */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Verification Status</h2>
            <p>
              {`A "Verified" badge on a listing or lister profile indicates that the user has
              completed our identity and/or licensing verification process. It does not constitute
              an endorsement, guarantee, or warranty of the lister's dogs, practices, or
              compliance with local laws and regulations. Buyers and adopters are encouraged to
              conduct their own due diligence.`}
            </p>
          </section>

          {/* Transactions */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Transactions Between Users</h2>
            <p>
              PawFinder is not responsible for any transactions, agreements, or disputes between
              users. We strongly recommend meeting in a safe, public location, verifying health
              records and documentation in person, and never sending payment to someone you
              have not met. Use caution when sharing personal or financial information.
            </p>
          </section>

          {/* External Links */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">External Links</h2>
            <p>
              PawFinder may contain links to external websites that are not provided or maintained
              by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of
              any information on these external websites. The inclusion of any link does not
              imply endorsement or recommendation.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Limitation of Liability</h2>
            <p>
              Under no circumstances shall PawFinder, its owners, operators, or affiliates be
              liable for any direct, indirect, incidental, special, consequential, or punitive
              damages arising from your use of the site, any transactions with other users, or
              any reliance on information provided through the platform.
            </p>
          </section>

          {/* Animal Welfare */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Animal Welfare</h2>
            <p>
              PawFinder is committed to promoting responsible pet ownership. We do not tolerate
              animal cruelty, neglect, or any activities that violate local, state, or federal
              animal welfare laws. If you suspect abuse or illegal activity, please report it to
              your local animal control authorities and notify our team immediately.
            </p>
          </section>

          {/* Changes */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Changes to This Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes will be
              effective immediately upon posting to this page. Your continued use of PawFinder
              after any changes constitutes acceptance of the updated disclaimer.
            </p>
          </section>

          {/* Contact */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">Contact</h2>
            <p>
              If you have questions about this disclaimer, please reach out through our{" "}
              <a href="/contact" className="text-primary underline hover:no-underline">
                Contact page
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
