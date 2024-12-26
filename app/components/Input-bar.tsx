import { Paperclip, Image, AtSign, FileText } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function InputBar() {
  return (
    <div className="p-4 border-t border-zinc-800">
      <div className="flex items-center gap-2 bg-zinc-900 rounded-lg p-2">
        <Input 
          placeholder="Ask anything, use @ to tag files and collections."
          className="bg-transparent border-0 focus-visible:ring-0 text-zinc-400"
        />
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-zinc-800 rounded-lg">
            <Paperclip className="w-5 h-5 text-zinc-500" />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-lg">
            <Image className="w-5 h-5 text-zinc-500" />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-lg">
            <AtSign className="w-5 h-5 text-zinc-500" />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-lg">
            <FileText className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

