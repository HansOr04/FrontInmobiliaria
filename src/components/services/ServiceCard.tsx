import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  iconColor?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  iconColor = 'text-corporate-purple',
}: ServiceCardProps) {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <div className="p-4 bg-gray-100 rounded-full">
            <Icon className={`w-12 h-12 ${iconColor}`} />
          </div>
        </div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-corporate-gray-medium mb-6">{description}</p>
        <Link href={href}>
          <Button variant="outline" className="w-full">
            Ver más →
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
