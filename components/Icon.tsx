import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: LucideIcon;
  size?: number;
}

export function Icon({ icon: IconComp, size = 20, className, ...props }: IconProps) {
  return <IconComp size={size} className={className} {...props} />;
}

export default Icon;

