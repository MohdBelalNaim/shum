"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Heart, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  // For demo purposes, hardcoded password. In a real app, you'd want to use a more secure approach
  const correctPassword = "untilifoundyou"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      router.push("/photos")
    } else {
      setError("That's not right! Try again, love.")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.6,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      <Card className="w-[350px] bg-white/80 backdrop-blur-sm border-pink-300 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-pink-600">Making sure it's you</CardTitle>
          <CardDescription className="text-pink-500">Enter our special password to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-pink-500" />
              <Input
                type="password"
                placeholder="Our secret password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full bg-pink-500 hover:bg-pink-600 text-white">
            Unlock My Heart
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
