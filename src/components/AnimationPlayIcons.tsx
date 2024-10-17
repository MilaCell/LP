'use client';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from './Play';

interface Column {
  x: string;
  color: string;
  delay: number;
}

const AnimatedPlayIcons: React.FC = () => {
  const iconHeight = 80;
  const columns = useMemo(() => [
    { x: '80%', color: "#fe090a", delay: 0 },
    { x: '79%', color: "#000", delay: iconHeight / 2 },
  ], []);

  const [offset, setOffset] = useState<number>(0);
  const iconCount = 12;
  const totalHeight = iconCount * iconHeight;

  // Memoized opacity calculation
  const calculateOpacity = useCallback((yPosition: number): number => {
    const normalizedPosition = yPosition / totalHeight;
    return Math.sin(normalizedPosition * Math.PI);
  }, [totalHeight]);

  useEffect(() => {
    let rafId: number;
    const startTime = performance.now();
    
    const animate = () => {
      const progress = performance.now() - startTime;
      setOffset(prev => (progress / 20) % totalHeight);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [totalHeight]);

  // Memoize the icon rendering logic
  const renderIcons = useMemo(() => 
    columns.map((column, columnIndex) =>
      [...Array(iconCount * 2)].map((_, i) => {
        const basePosition = (i * iconHeight) - ((offset + column.delay) % totalHeight);
        const yPosition = ((basePosition % totalHeight) + totalHeight) % totalHeight;
        const opacity = calculateOpacity(yPosition);

        const iconProps = {
          size: 60,
          color: column.color,
          strokeWidth: 2,
          style: {
            transform: column.color === "#fe090a" ? 'rotate(180deg)' : 'none',
          }
        };

        return (
          <motion.div
            key={`${columnIndex}-${i}`}
            style={{
              position: 'absolute',
              left: column.x,
              top: `${yPosition}px`,
              willChange: 'transform, opacity',
              transform: 'translate3d(0, 0, 0)',
              opacity,
              transition: 'opacity 0.15s ease-out'
            }}
            initial={false}
          >
            <PlayIcon {...iconProps} />
          </motion.div>
        );
      })
    ),
    [columns, offset, calculateOpacity, totalHeight]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -skew-x-12">
      {renderIcons}
    </div>
  );
};

export default AnimatedPlayIcons;