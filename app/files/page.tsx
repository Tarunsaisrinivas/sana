'use client'

import { ChevronDown, X, FileUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilesPage() {
  return (
    <div className="flex-1 h-screen">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 h-14">
        <div className="flex items-center gap-2">
          <Select defaultValue="recent">
            <SelectTrigger className="bg-transparent border-0 text-zinc-400 hover:bg-zinc-800 [&>svg]:text-zinc-400">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">All recent files</SelectItem>
              <SelectItem value="shared">Shared files</SelectItem>
              <SelectItem value="archived">Archived files</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button className="p-2 hover:bg-zinc-800 rounded-full">
          <X className="h-5 w-5 text-zinc-400" />
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] text-center px-4">
        <div className="mb-6">
          <FileUp className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">
            You have no recent files
          </h2>
          <p className="text-zinc-400 max-w-md">
            This is where you will find and manage your most recent files. Either uploaded by you, or shared with you.
          </p>
        </div>
        <Button 
          variant="outline" 
          className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:border-zinc-600"
        >
          Upload file
        </Button>
      </div>
    </div>
  )
}

