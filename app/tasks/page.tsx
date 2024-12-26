'use client'

import { Search, Clock } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { TaskCard } from "../components/task-card"
import { TaskCategories } from "../components/task-categories"

export default function TasksPage() {
  return (
    <div className="flex h-full">
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Browse tasks
          </h1>
          <p className="text-zinc-400 text-lg">
            Discover and create premade tasks that combine multiple instructions and specific knowledge
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            className="w-full bg-zinc-900/50 border-zinc-800 pl-12 h-12 text-lg text-zinc-100"
            placeholder="Search tasks"
          />
        </div>

        <div className="space-y-4">
          <TaskCard 
            title="Answer RFP documentation"
            company="Sana AI"
            image="/placeholder.svg?height=280&width=400"
          />
          <TaskCard 
            title="Conduct a competitor analysis"
            company="Sana AI"
            image="/placeholder.svg?height=280&width=400"
          />
        </div>
      </div>

      <TaskCategories />
    </div>
  )
}

