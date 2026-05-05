"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 lg:px-8">
      <div className="rounded-md bg-pink-400 px-6 py-3 mb-8">
        <h1 className="text-xl font-extrabold text-foreground">LOGIN</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Your password" />
        </div>

        <Button type="submit" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
          Login
        </Button>

        <div className="flex flex-col items-center gap-2 text-sm">
          <Link href="/reset-password" className="text-primary hover:underline">Forgot your password?</Link>
          <p className="text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/register" className="text-primary hover:underline">Register</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
