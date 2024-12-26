import { Card, CardContent } from "@/components/ui/card"

interface AssistantCardProps {
  title: string
  handle: string
  description: string
  icon: string
  iconBg: string
  creator: string
  uses: number
}

export function AssistantCard({
  title,
  handle,
  description,
  icon,
  iconBg,
  creator,
  uses
}: AssistantCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center text-2xl`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium mb-1">{title}</h3>
            <p className="text-zinc-500 text-sm mb-2">{handle}</p>
            <p className="text-zinc-400 text-sm mb-4">{description}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded flex items-center justify-center text-xs">
                  L
                </div>
                <span className="text-zinc-500 text-sm">{creator}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-zinc-800 w-6 h-6 rounded flex items-center justify-center text-xs text-zinc-400">
                  {uses}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

