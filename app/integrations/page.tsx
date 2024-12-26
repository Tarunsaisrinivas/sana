import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntegrationCard } from "../components/integration-card"

const availableIntegrations = [
  {
    name: "Google Drive",
    description: "Ask your docs, sheets, presentations, and files anything.",
    limit: "Limited to your 1,000 most recent files in the Free tier.",
    icon: "/placeholder.svg?height=40&width=40",
    iconBg: "bg-white"
  },
  {
    name: "Notion",
    description: "Chat with your databases and docs.",
    limit: "Limited to your 50 most recent pages in the Free tier.",
    icon: "/placeholder.svg?height=40&width=40",
    iconBg: "bg-white"
  },
  {
    name: "Dropbox",
    description: "Access and question your stored files.",
    limit: "",
    icon: "/placeholder.svg?height=40&width=40",
    iconBg: "bg-[#0061FF]"
  }
]

export default function IntegrationsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">
          Connected integrations
        </h1>
        <p className="text-zinc-400 text-lg">
          Manage your connected data sources
        </p>
      </div>

      <Tabs defaultValue="private" className="space-y-8">
        <TabsList className="bg-zinc-900 border-zinc-800">
          <TabsTrigger value="private" className="data-[state=active]:bg-zinc-800">
            Private
          </TabsTrigger>
          <TabsTrigger value="shared" className="data-[state=active]:bg-zinc-800">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="private" className="space-y-8">
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-lg">
            <h3 className="text-white text-lg font-medium mb-2">
              You have no private integrations
            </h3>
            <p className="text-zinc-400 mb-4">
              Add integrations to increase the data available to you
            </p>
            <Button variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
              Browse integrations
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="shared">
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-lg">
            <h3 className="text-white text-lg font-medium mb-2">
              No shared integrations
            </h3>
            <p className="text-zinc-400 mb-4">
              Share integrations with your team to collaborate
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Available integrations
        </h2>
        <p className="text-zinc-400 text-lg mb-6">
          Browse and connect your data sources
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableIntegrations.map((integration) => (
            <IntegrationCard
              key={integration.name}
              {...integration}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

