'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface RejectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  testimonialId: string;
}

export function RejectDialog({
  isOpen,
  onClose,
  onConfirm,
}: RejectDialogProps) {
  const [reason, setReason] = useState('');

  const handleConfirm = () => {
    if (reason.trim()) {
      onConfirm(reason);
      setReason('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rechazar Testimonio</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="reason">
              Motivo del rechazo <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="reason"
              placeholder="Explica por qué rechazas este testimonio..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="mt-2"
            />
            <p className="text-sm text-gray-500 mt-1">
              Este motivo será registrado en el sistema (no se envía al cliente)
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={handleConfirm}
              disabled={!reason.trim()}
              variant="destructive"
              className="flex-1"
            >
              Confirmar Rechazo
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
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
