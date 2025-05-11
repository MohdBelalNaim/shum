"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const photos = [
    { src: "1.jpg", alt: "Photo 1" },
    { src: "2.jpg", alt: "Photo 2" },
    { src: "3.jpg", alt: "Photo 3" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 animate-float"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">My favourite photos of youu!!</h1>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/16] mb-8 z-10">
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={photos[currentIndex].src}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-pink-600 hover:bg-white z-20"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-pink-600 hover:bg-white z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Poetry Button */}
      <Button
        onClick={() => router.push("/poetry")}
        className="bg-pink-500 hover:bg-pink-600 text-white flex items-center gap-2 z-10"
      >
        <BookOpen size={16} />
        Read My Poetry For You
      </Button>
    </main>
  )
}
