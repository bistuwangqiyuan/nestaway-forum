import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900',
        'placeholder:text-slate-400 transition-colors',
        'focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15',
        'disabled:cursor-not-allowed disabled:opacity-60',
        'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 leading-relaxed',
      'placeholder:text-slate-400 transition-colors resize-y min-h-[120px]',
      'focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15',
      'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';
