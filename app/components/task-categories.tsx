import { Clock } from 'lucide-react'
import { cn } from "@/lib/utils"

const categories = [
  { name: "All tasks", active: true },
  { name: "Created by me" },
  { name: "My recently used" },
  { name: "Create task", icon: Clock },
  { name: "Customer success" },
  { name: "Customer Support" },
  { name: "Emails" },
  { name: "HR" },
  { name: "Investments & Private" },
]

export function TaskCategories() {
  return (
    <div className="w-72 border-l border-zinc-800 p-6">
      <nav className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className={cn(
              "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              category.active 
                ? "bg-zinc-800 text-white" 
                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
            )}
          >
            {category.icon && <category.icon className="h-4 w-4" />}
            {category.name}
          </button>
        ))}
      </nav>
    </div>
  )
}

