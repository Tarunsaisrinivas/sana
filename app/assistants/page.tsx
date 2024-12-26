import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AssistantCard } from "../components/assistant-card"

const assistants = [
  {
    title: "Customer Support Assistant",
    handle: "@customersupport",
    description: "Designed to resolve sensitive issues efficiently while ensuring a positive customer experience",
    icon: "📱",
    iconBg: "bg-orange-500",
    creator: "Tarun Sai Srinivas",
    uses: 0
  },
  {
    title: "HR Assistant",
    handle: "@hr",
    description: "Designed to provide guidance on HR policies, employee relations, and recruitment",
    icon: "👥",
    iconBg: "bg-green-500",
    creator: "Tarun Sai Srinivas",
    uses: 0
  },
  {
    title: "IT support Assistant",
    handle: "@itsupport",
    description: "Designed to help troubleshoot and resolve technical issues efficiently",
    icon: "🔧",
    iconBg: "bg-green-500",
    creator: "Tarun Sai Srinivas",
    uses: 0
  },
  {
    title: "Legal Assistant",
    handle: "@legal",
    description: "Designed to support drafting and analyzing legal documents",
    icon: "⚖️",
    iconBg: "bg-zinc-100",
    creator: "Tarun Sai Srinivas",
    uses: 0
  },
  {
    title: "Marketing Assistant",
    handle: "@marketing",
    description: "Designed to support content creation, marketing campaign management, and data analysis.",
    icon: "📢",
    iconBg: "bg-zinc-100",
    creator: "Tarun Sai Srinivas",
    uses: 0
  },
  {
    title: "Product Information Assistant",
    handle: "@product",
    description: "Designed to provide accurate product information and support more informed decisions.",
    icon: "🔍",
    iconBg: "bg-zinc-100",
    creator: "Tarun Sai Srinivas",
    uses: 0
  }
]

export default function AssistantsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-white mb-2">
            Browse assistants
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Discover and create custom assistants that combine instructions, extra knowledge, and any combination of tasks.
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-zinc-200">
          <Plus className="mr-2 h-4 w-4" />
          Create
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl text-white mb-4">Created by me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assistants.map((assistant) => (
            <AssistantCard
              key={assistant.handle}
              {...assistant}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

