import { cn } from '@/lib/utils';

export function HeadingH3({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>;
}
