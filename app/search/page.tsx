'use client'

import { SearchIcon, ChevronDown, Folder, Users, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-white mb-8">Search</h1>
      
      <div className="space-y-8">
        {/* Search Input */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            className="w-full bg-zinc-900/50 border-zinc-800 pl-12 pr-12 h-12 text-lg text-zinc-100"
            placeholder="Search any file or document"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-zinc-800 rounded-full flex items-center justify-center">
            <span className="text-zinc-400">⌘</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800">
            <Folder className="mr-2 h-4 w-4" />
            Sources
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800">
            <Folder className="mr-2 h-4 w-4" />
            Collections
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800">
            <Users className="mr-2 h-4 w-4" />
            Assistants
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800">
            <Calendar className="mr-2 h-4 w-4" />
            Date
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Recent Searches */}
        <div>
          <h2 className="text-xl text-white mb-4">Recent searches</h2>
          <div className="text-zinc-400">
            No recent searches
          </div>
        </div>
      </div>
    </div>
  )
}

