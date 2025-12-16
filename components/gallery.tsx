"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Play, Image as ImageIcon, Video, X } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; title: string } | null>(null)

  // Sample media data - replace with your actual images and videos
  const mediaItems = [
    // Security Personnel Images
    {
      type: "image" as const,
      src: "/pics101.jpg",
      title: "Security Personnel & Patrol Vehicle",
      category: "personnel",
    },
    {
      type: "image" as const,
      src: "/pics102.jpg",
      title: "Professional Security Team",
      category: "personnel",
    },
    // Training and Personnel Videos
    {
      type: "video" as const,
      src: "/video1.mp4",
      title: "Security Personnel Training Session",
      category: "training",
    },
    {
      type: "video" as const,
      src: "/video2.mp4",
      title: "Security Operations Overview",
      category: "personnel",
    },
    {
      type: "video" as const,
      src: "/video3.mp4",
      title: "Advanced Security Training",
      category: "training",
    },
  ]

  const [activeCategory, setActiveCategory] = useState<"all" | "personnel" | "training">("all")

  const filteredMedia = activeCategory === "all" ? mediaItems : mediaItems.filter((item) => item.category === activeCategory)

  const openMedia = (item: typeof mediaItems[0]) => {
    setSelectedMedia({ type: item.type, src: item.src, title: item.title })
  }

  const closeMedia = () => {
    setSelectedMedia(null)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Our Security Personnel & Training
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Explore our professional security team in action and comprehensive training programs that ensure excellence in
            every operation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("personnel")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === "personnel"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Personnel
          </button>
          <button
            onClick={() => setActiveCategory("training")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === "training"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Training
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openMedia(item)}
            >
              {item.type === "image" ? (
                // Image Card - maintains natural aspect ratio
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              ) : (
                // Video Card - fixed aspect ratio
                <div className="relative w-full aspect-video bg-primary/10">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4">
                      <Play className="w-12 h-12 text-white" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="w-8 h-8 text-primary" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeMedia}
          >
            <button
              onClick={closeMedia}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === "image" ? (
                <div className="relative aspect-video">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="90vw"
                  />
                </div>
              ) : (
                <div className="relative aspect-video">
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <h3 className="text-white text-xl font-bold mt-4 text-center">{selectedMedia.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

