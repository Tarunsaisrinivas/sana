'use client'

import { Search, MoreVertical, Link2, Upload } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const demoItems = [
  {
    title: "Demo - Why AI Will Save the World | Andreessen Horowitz",
    timestamp: "Yesterday, 10:06 am",
    icon: "link"
  },
  {
    title: "Demo - NVIDIA Corporation - NVIDIA Announces Financial Results",
    timestamp: "Yesterday, 10:06 am",
    icon: "link"
  },
  {
    title: "Demo - Sana AI Daily Standup",
    timestamp: "Yesterday, 10:06 am",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    title: "Demo - Sana AI Sales Onboarding: Lauren <> Jon",
    timestamp: "Yesterday, 10:06 am",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    title: "Demo - Sana AI Sales Support Session",
    timestamp: "Yesterday, 10:06 am",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    title: "Demo - MGI Performance People Report",
    timestamp: "Yesterday, 10:06 am",
    icon: "document"
  },
  {
    title: "Demo - Sana AI Security Whitepaper",
    timestamp: "Yesterday, 10:06 am",
    icon: "document"
  },
  {
    title: "Demo - Acme NDA",
    timestamp: "Yesterday, 10:06 am",
    icon: "document"
  }
]

export default function DemoCollectionPage() {
  return (
    <div className="flex-1 h-screen">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 h-14">
        <h1 className="text-white text-lg">Demo collection</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-zinc-800 rounded-full">
            <Search className="h-5 w-5 text-zinc-400" />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-full">
            <MoreVertical className="h-5 w-5 text-zinc-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="space-y-4">
          {demoItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-zinc-800/50 rounded-lg group"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  {item.icon === 'link' ? (
                    <Link2 className="h-5 w-5 text-zinc-400" />
                  ) : (
                    <div className="w-5 h-6 border-2 border-zinc-400 rounded" />
                  )}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-60 right-0 p-4 border-t border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
            Ask anything
          </Button>
          <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
            Add integration
          </Button>
          <Button className="bg-white text-black hover:bg-zinc-100">
            Upload file
          </Button>
        </div>
      </div>
    </div>
  )
}

