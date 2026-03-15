'use client';

import { LogOut, User as UserIcon, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { formatUserRole, getUserInitials } from '@/lib/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  const initials = getUserInitials(user.name);
  const roleLabel = formatUserRole(user.role);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar_url} alt={user.name} />
          <AvatarFallback className="bg-corporate-purple text-white text-sm">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{roleLabel}</p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <Badge variant="secondary" className="w-fit mt-1">
              {roleLabel}
            </Badge>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Mi perfil</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Configuración</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={logout}
          className="text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
