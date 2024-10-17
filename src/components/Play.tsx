import React, { StyleHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface PlayIconProps {
  color?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;  // Adiciona suporte para strokeWidth
  style?: StyleHTMLAttributes<SVGSVGElement>['style'];
}

const PlayIcon: React.FC<PlayIconProps> = ({ color = '#000', size = 24, className, strokeWidth = 1, style }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
      style={style}
    >
      <path
        clipRule="evenodd"
        d="m12.3621 6.04895 2.0113 1.06484c1.2695.67208 2.269 1.20117 3.0007 1.67871.7316.47752 1.3129.97489 1.6171 1.6321.4627.9993.4627 2.1515 0 3.1508-.3042.6572-.8855 1.1546-1.6171 1.6321-.7318.4775-1.7312 1.0066-3.0007 1.6787l-2.0114 1.0649c-1.1331.5999-2.0298 1.0746-2.76141 1.3801-.73709.3077-1.4148.4926-2.08824.4042-1.03476-.1357-1.96616-.6964-2.57025-1.5475-.39315-.5538-.54686-1.2393-.61976-2.0347-.07235-.7895-.07235-1.8042-.07234-3.0863v-2.1338c-.00001-1.28214-.00001-2.29683.07234-3.08632.0729-.79543.22661-1.48088.61976-2.03473.60409-.851 1.53549-1.41178 2.57025-1.54749.67344-.08833 1.35115.09654 2.08824.40428.73161.30545 1.62841.78021 2.76151 1.38011z"
        fill={color}
        stroke={color}  // Permite alterar a cor do contorno
        strokeWidth={strokeWidth}  // Controle da grossura do contorno
        fillRule="evenodd"
      />
    </svg>
  );
};

export {PlayIcon};
