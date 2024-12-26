'use client'

import { X, Share2 } from 'lucide-react'

export default function SharedPage() {
  return (
    <div className="flex-1 h-screen">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 h-14">
        <h1 className="text-white text-lg">Shared with me</h1>
        <button className="p-2 hover:bg-zinc-800 rounded-full">
          <X className="h-5 w-5 text-zinc-400" />
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] text-center px-4">
        <div className="mb-6">
          <div className="mb-6 p-4 rounded-full bg-zinc-800/50 inline-block">
            <Share2 className="h-8 w-8 text-zinc-600" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            You have nothing shared with you
          </h2>
          <p className="text-zinc-400 max-w-md">
            This is where you will find and manage everything that have been shared with you.
          </p>
        </div>
      </div>
    </div>
  )
}

