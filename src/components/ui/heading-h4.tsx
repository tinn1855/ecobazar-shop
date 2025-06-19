import { cn } from '@/lib/utils';

export function HeadingH4({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <h4 className={cn('', className)}>{children}</h4>;
}
