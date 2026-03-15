import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-corporate-purple text-white hover:bg-corporate-purple/80",
        secondary:
          "border-transparent bg-corporate-green text-white hover:bg-corporate-green/80",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "text-gray-900 border-gray-300",
        orange:
          "border-transparent bg-corporate-orange text-white hover:bg-corporate-orange/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
