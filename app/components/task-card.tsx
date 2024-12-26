import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface TaskCardProps {
  title: string
  company: string
  image: string
}

export function TaskCard({ title, company, image }: TaskCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-colors overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <p className="text-zinc-500 text-sm mb-2">{company}</p>
          <h3 className="text-white text-lg font-medium">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

