import { ReactNode, Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function InmobiliariaLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {children}
    </Suspense>
  );
}
