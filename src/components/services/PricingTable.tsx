import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
  ctaVariant?: 'default' | 'secondary' | 'orange' | 'outline'
}

interface PricingTableProps {
  plans: PricingPlan[]
}

export default function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative ${
            plan.highlighted
              ? 'border-2 border-corporate-green shadow-xl scale-105'
              : 'border-gray-200'
          }`}
        >
          {plan.highlighted && (
            <Badge
              variant="secondary"
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            >
              MÁS POPULAR
            </Badge>
          )}

          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
            <div className="text-4xl font-bold text-corporate-purple mb-2">
              {plan.price}
            </div>
            <p className="text-sm text-corporate-gray-medium">
              {plan.description}
            </p>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.ctaVariant || 'default'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
