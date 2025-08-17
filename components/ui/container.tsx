import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export function Section({ children, className, as: Component = 'section', id }: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        className
      )}
    >
      {children}
    </Component>
  );
}
