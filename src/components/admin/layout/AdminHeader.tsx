'use client';

import { Menu } from 'lucide-react';
import { NotificationBell } from './NotificationBell';
import { UserMenu } from './UserMenu';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  onMenuClick?: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Spacer for desktop */}
      <div className="hidden md:block" />

      {/* Right side - Notifications and User Menu */}
      <div className="flex items-center gap-4">
        <NotificationBell />
        <UserMenu />
      </div>
    </header>
  );
}
