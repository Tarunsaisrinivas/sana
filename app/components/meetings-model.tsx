import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface MeetingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MeetingsModal({ isOpen, onClose }: MeetingsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-20 flex items-center justify-center">
      <div className="bg-zinc-900 max-w-2xl w-full mx-4 rounded-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-zinc-800 rounded-full"
        >
          <X className="h-5 w-5 text-zinc-400" />
        </button>

        {/* Meeting Card */}
        <div className="bg-zinc-700/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-xl font-medium mb-4">
            Recap your sales call with Europa Green Energy
          </h3>
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-zinc-400">Acme x Europa • This morning</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get started with meetings
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Connect your calendar to allow the meeting assistant to join, record, and automatically summarize your meetings. Ask follow-up questions in the chat, and experience a new way of getting insights from your conversations.
          </p>

          <div className="space-y-4">
            <p className="text-zinc-500">Connect with</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google Calendar"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google Calendar
              </Button>
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Outlook Calendar"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Outlook Calendar
              </Button>
            </div>
            <p className="text-zinc-500 text-sm">
              View Google disclosure
            </p>
          </div>
        </div>

        {/* Add Meeting Button */}
        <div className="flex justify-end">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            Add meeting
          </Button>
        </div>
      </div>
    </div>
  )
}

