import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  href?: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  href,
  iconColor = 'text-corporate-purple',
  iconBgColor = 'bg-purple-100',
}: StatsCardProps) {
  const CardWrapper = href ? Link : 'div';

  return (
    <CardWrapper href={href || '#'} className={cn(href && 'cursor-pointer')}>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={cn('p-3 rounded-lg', iconBgColor)}>
              <Icon className={cn('w-6 h-6', iconColor)} />
            </div>
            {trend && (
              <Badge
                variant={trend.isPositive ? 'default' : 'destructive'}
                className={cn(
                  'text-xs',
                  trend.isPositive && 'bg-green-100 text-green-700 hover:bg-green-100'
                )}
              >
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </Badge>
            )}
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
