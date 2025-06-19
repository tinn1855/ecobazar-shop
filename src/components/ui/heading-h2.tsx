import { cn } from '@/lib/utils';

export function HeadingH2({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2 className={cn('text-[32px] font-semibold', className)}>{children}</h2>
  );
}
