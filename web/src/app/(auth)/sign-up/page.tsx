"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { z } from "zod"
import { useAuth } from "@/hooks/useAuth"

const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(64, { message: "Password must be at most 64 characters" })
    .regex(/[A-Z]/, { message: "Password must contain an uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain a lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain a number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain a special character" }),
})

type SignUpForm = z.infer<typeof signUpSchema>

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, setForm] = useState<SignUpForm>({ email: "", password: "" })
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpForm, string>>>({})
  const { signIn } = useAuth()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value })
    setErrors({ ...errors, [e.target.id]: undefined })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = signUpSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignUpForm, string>> = {}
      for (const err of result.error.errors) {
        if (err.path[0]) fieldErrors[err.path[0] as keyof SignUpForm] = err.message
      }
      setErrors(fieldErrors)
      return
    }
    // Call registration endpoint before signIn
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setErrors({ email: data?.error || "Registration failed" })
      return
    }
    // Use signIn from useAuth
    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirectTo: "/",
    })
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your details below to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                      aria-invalid={!!errors.password}
                    />
                    {errors.password && (
                      <span className="text-xs text-red-500">{errors.password}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Create account
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-primary">
                  Have an account?{" "}
                  <a href="/sign-in" className="underline underline-offset-4">
                    Sign in
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
