import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface DocumentCardProps {
  title: string
  subtitle: string
  imageSrc: string
}

export function DocumentCard({ title, subtitle, imageSrc }: DocumentCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="text-zinc-500 text-sm">
        {subtitle}
      </CardHeader>
      <CardContent>
        <h3 className="text-zinc-100 text-lg mb-4">{title}</h3>
        <div className="flex items-center gap-2">
          <Image
            src={imageSrc}
            alt="Document thumbnail"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-zinc-400 text-sm truncate">Demo - MGI Performance P...</span>
        </div>
      </CardContent>
    </Card>
  )
}

