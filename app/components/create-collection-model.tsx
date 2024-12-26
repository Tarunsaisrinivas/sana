'use client'

import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CreateCollectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateCollectionModal({ isOpen, onClose }: CreateCollectionModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 max-w-md w-full mx-4 rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-zinc-800 rounded-full"
        >
          <X className="h-5 w-5 text-zinc-400" />
        </button>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Create new collection
          </h2>
          
          <p className="text-zinc-400 text-lg">
            Share resources and chats with your team members
          </p>

          <Input
            placeholder="Collection name"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
          />

          <Select>
            <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-white">
              <SelectValue placeholder="Invite only" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="invite">Invite only</SelectItem>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            className="w-full bg-zinc-800 text-white hover:bg-zinc-700"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

