import React from 'react';

export interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg' | 'none';
  children?: React.ReactNode;
}

const paddingClasses: Record<Exclude<GlassContainerProps['padding'], undefined>, string> = {
  none: '',
  sm: 'p-4 md:p-6',
  md: 'p-6 md:p-10',
  lg: 'p-8 md:p-14',
};

export default function GlassContainer({
  className,
  padding = 'md',
  children,
  ...props
}: GlassContainerProps) {
  const classes = [
    'glass-container relative overflow-hidden',
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/15"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
