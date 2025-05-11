"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

// Sample poetry content
const poems = {
  "when-i-first-saw-you": {
    title: "When I First Saw You",
    content: `When I first saw you, my heart skipped a beat,
The world stood still, beneath my feet.
Your smile so bright, your eyes so kind,
A more beautiful soul, I'll never find.

Each day since then, has been a gift,
Your love gives my heart, the perfect lift.
Forever grateful, for that fateful day,
When you came along, and showed me the way.`,
  },
  "light-of-my-life": {
    title: "The Light of My Life",
    content: `In darkness I wandered, before you came,
Now you're the light, that guides my way.
Your love shines bright, through storm and rain,
Illuminating my path, day by day.

You're the sunshine, that warms my soul,
The beacon that leads, when I feel lost.
With you by my side, I feel so whole,
A love like yours, is worth any cost.`,
  },
  "forever-and-always": {
    title: "Forever and Always",
    content: `Forever is a promise, I make to you,
Always is how long, my love will be true.
Through thick and thin, through joy and pain,
My heart is yours, again and again.

Time may pass, seasons may change,
But my love for you, will never rearrange.
Forever and always, I'll stand by your side,
With you, my love, I'll always abide.`,
  },
  "my-hearts-keeper": {
    title: "My Heart's Keeper",
    content: `You hold the key, to my heart's door,
A treasure I've given, to no one before.
With gentle hands, you keep it safe,
Filling it with love, and endless faith.

My heart's keeper, that's what you are,
Guiding me home, like the brightest star.
In your care, my heart will stay,
Growing stronger, with each passing day.`,
  },
  "every-day-with-you": {
    title: "Every Day With You",
    content: `Every morning I wake, with a smile on my face,
Knowing that you, are my saving grace.
Every moment we share, is a blessing divine,
I thank the stars, that you are mine.

Every laugh, every tear, every whispered word,
Creates a symphony, the sweetest I've heard.
Every day with you, is a gift from above,
A journey of joy, filled with endless love.`,
  },
}

export default function PoemPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const poem = poems[params.slug as keyof typeof poems]

  if (!poem) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-pink-300">
          <CardContent className="pt-6">
            <p className="text-center text-pink-600">Poem not found</p>
            <Button onClick={() => router.push("/poetry")} className="mt-4 w-full bg-pink-500 hover:bg-pink-600">
              Back to Poetry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          onClick={() => router.push("/poetry")}
          variant="outline"
          className="mb-6 border-pink-300 text-pink-600 hover:bg-pink-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Poetry
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-pink-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center border-b border-pink-100 pb-4">
              <CardTitle className="text-2xl text-pink-600 flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2 text-pink-500" fill="currentColor" />
                {poem.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-pink mx-auto">
                {poem.content.split("\n\n").map((stanza, i) => (
                  <p key={i} className="whitespace-pre-line text-pink-800 text-center mb-6">
                    {stanza}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
