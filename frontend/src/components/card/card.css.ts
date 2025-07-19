import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const cardStyles = tv({
  slots: {
    base: 'rounded-lg bg-card text-card-foreground shadow-sm border-b border-slate-100',
    header: 'flex flex-col space-y-1.5 p-4',
    title: 'font-semibold leading-none tracking-tight',
    description: 'text-muted-foreground text-sm',
    content: 'p-4 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
});

export type CardVariants = VariantProps<typeof cardStyles>;
