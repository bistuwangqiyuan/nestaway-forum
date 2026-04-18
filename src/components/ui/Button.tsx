import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const variants = cva('btn-base disabled:opacity-50', {
  variants: {
    variant: {
      primary:
        'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-soft',
      secondary:
        'bg-brand-50 text-brand-800 hover:bg-brand-100 dark:bg-brand-900/40 dark:text-brand-200 dark:hover:bg-brand-900/60',
      outline:
        'border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200',
      ghost:
        'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300',
      warm:
        'bg-warm-500 text-white hover:bg-warm-600',
      destructive:
        'bg-red-600 text-white hover:bg-red-700',
    },
    size: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      icon: 'h-9 w-9',
      iconSm: 'h-8 w-8',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(variants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = 'Button';

export { variants as buttonVariants };
