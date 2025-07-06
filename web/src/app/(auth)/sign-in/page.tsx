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
import { useRouter } from "next/navigation"

const signInSchema = z.object({
  email: z
    .string()
    .min(5, "Email is required")
    .email("Invalid email address")
    .max(100, "Email too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password too long")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[^A-Za-z0-9]/, "Password must contain a special character"),
})

type SignInForm = z.infer<typeof signInSchema>

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, setForm] = useState<SignInForm>({ email: "", password: "" })
  const [errors, setErrors] = useState<Partial<Record<keyof SignInForm, string>>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const { signIn, isLoading } = useAuth()
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value })
    setErrors({ ...errors, [e.target.id]: undefined })
    setFormError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = signInSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignInForm, string>> = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof SignInForm
        fieldErrors[field] = err.message
      })
      setErrors(fieldErrors)
      setFormError("Please fix the errors above.")
      return
    }
    setErrors({})
    setFormError(null)
    // Call signIn from useAuth
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
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
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
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <span
                          id="email-error"
                          className="text-xs text-red-500"
                          role="alert"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        aria-invalid={!!errors.password}
                        aria-describedby={errors.password ? "password-error" : undefined}
                      />
                      {errors.password && (
                        <span
                          id="password-error"
                          className="text-xs text-red-500"
                          role="alert"
                        >
                          {errors.password}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                    </div>
                    {formError && (
                      <div className="text-xs text-red-500 text-center">{formError}</div>
                    )}
                  </div>
                  <div className="mt-4 text-center text-sm text-primary">
                    Don&apos;t have an account?{" "}
                    <a href="/sign-up" className="underline underline-offset-4">
                      Sign up
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
