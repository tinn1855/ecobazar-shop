import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export function HeadingH1({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={cn('text-5xl font-semibold', className)}>{children}</h1>
  );
}
