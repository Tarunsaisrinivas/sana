import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface IntegrationCardProps {
  name: string
  description: string
  limit: string
  icon: string
  iconBg: string
}

export function IntegrationCard({
  name,
  description,
  limit,
  icon,
  iconBg
}: IntegrationCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
          <Image
            src={icon}
            alt={name}
            width={24}
            height={24}
          />
        </div>
        <h3 className="text-white text-lg font-medium mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm mb-2">{description}</p>
        {limit && (
          <p className="text-zinc-500 text-sm">{limit}</p>
        )}
      </CardContent>
    </Card>
  )
}

