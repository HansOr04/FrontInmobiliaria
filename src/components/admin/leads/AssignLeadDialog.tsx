'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { getUserInitials } from '@/lib/auth';

// Mock users - replace with real API data
const mockAgents = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana@ortizidrovo.com',
    role: 'agent',
    avatar_url: undefined,
    active_leads: 12,
  },
  {
    id: '2',
    name: 'Carlos Méndez',
    email: 'carlos@ortizidrovo.com',
    role: 'agent',
    avatar_url: undefined,
    active_leads: 8,
  },
  {
    id: '3',
    name: 'María González',
    email: 'maria@ortizidrovo.com',
    role: 'receptionist',
    avatar_url: undefined,
    active_leads: 15,
  },
];

interface AssignLeadDialogProps {
  leadId: string;
  currentAssignee?: string;
  onAssign: (leadId: string, userId: string) => void;
  trigger?: React.ReactNode;
}

export function AssignLeadDialog({
  leadId,
  currentAssignee,
  onAssign,
  trigger,
}: AssignLeadDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(currentAssignee);

  const handleAssign = () => {
    if (selected) {
      onAssign(leadId, selected);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Asignar Lead</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Asignar Lead a Agente</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-600">
            Selecciona el agente o recepcionista que gestionará este lead
          </p>

          <div className="space-y-2">
            {mockAgents.map((agent) => (
              <Card
                key={agent.id}
                className={cn(
                  'p-4 cursor-pointer hover:border-corporate-purple transition-colors',
                  selected === agent.id && 'border-corporate-purple bg-purple-50'
                )}
                onClick={() => setSelected(agent.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={agent.avatar_url} />
                      <AvatarFallback className="bg-corporate-purple text-white">
                        {getUserInitials(agent.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-sm text-gray-500">{agent.email}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {agent.active_leads} leads activos
                      </p>
                    </div>
                  </div>
                  {selected === agent.id && (
                    <Check className="w-5 h-5 text-corporate-purple" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={handleAssign}
              disabled={!selected}
              className="flex-1 bg-corporate-purple hover:bg-corporate-purple/90"
            >
              Asignar Lead
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
