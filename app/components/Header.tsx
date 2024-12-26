import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <h1 className="text-zinc-400">Your assistant</h1>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Sales Assistant</span>
          <span className="text-blue-500 text-sm">Beta</span>
        </div>
        <span className="text-zinc-500">Browse assistants</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-zinc-400">
          Invite
        </Button>
        <Button variant="ghost" className="text-zinc-400">
          Help
        </Button>
      </div>
    </header>
  )
}

