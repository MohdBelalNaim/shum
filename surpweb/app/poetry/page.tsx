"use client"
import { useRouter } from "next/navigation"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Poetry() {
  const router = useRouter()

  // Sample poetry titles and slugs
  const poems = [
    { id: 1, title: "When I First Saw You", slug: "when-i-first-saw-you" },
    { id: 2, title: "The Light of My Life", slug: "light-of-my-life" },
    { id: 3, title: "Forever and Always", slug: "forever-and-always" },
    { id: 4, title: "My Heart's Keeper", slug: "my-hearts-keeper" },
    { id: 5, title: "Every Day With You", slug: "every-day-with-you" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          onClick={() => router.push("/photos")}
          variant="outline"
          className="mb-6 border-pink-300 text-pink-600 hover:bg-pink-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Photos
        </Button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Poetry For You</h1>
          <p className="text-pink-500">Words from my heart to yours</p>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-2">
          {poems.map((poem) => (
            <motion.div key={poem.id} variants={item}>
              <Card
                className="border-pink-300 hover:shadow-lg transition-shadow cursor-pointer bg-white/80 backdrop-blur-sm"
                onClick={() => router.push(`/poetry/${poem.slug}`)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-pink-600 flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-pink-500" />
                    {poem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-pink-500 text-sm">Click to read this poem...</CardContent>
                <CardFooter className="pt-2 text-xs text-pink-400">Written with love</CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
