"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 lg:px-8">
      <div className="rounded-md bg-pink-400 px-6 py-3 mb-8">
        <h1 className="text-xl font-extrabold text-foreground">REGISTER</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Choose a password" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input id="confirm" type="password" placeholder="Confirm your password" />
        </div>

        <Button type="submit" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
          Create Account
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </form>
    </div>
  )
}
