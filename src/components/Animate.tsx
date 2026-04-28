import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimateProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const baseStyle: React.CSSProperties = {
  transitionProperty: 'opacity, transform',
  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  transitionDuration: '0.65s',
};

const hiddenStyles: Record<AnimationType, React.CSSProperties> = {
  'fade-up':    { opacity: 0, transform: 'translateY(28px)' },
  'fade-in':    { opacity: 0, transform: 'none' },
  'slide-left': { opacity: 0, transform: 'translateX(-28px)' },
  'slide-right':{ opacity: 0, transform: 'translateX(28px)' },
};

const visibleStyle: React.CSSProperties = {
  opacity: 1,
  transform: 'none',
};

export default function Animate({
  children,
  type = 'fade-up',
  delay = 0,
  className = '',
  threshold,
}: AnimateProps) {
  const { ref, isInView } = useInView({ threshold });

  const style: React.CSSProperties = {
    ...baseStyle,
    transitionDelay: `${delay}ms`,
    ...(isInView ? visibleStyle : hiddenStyles[type]),
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
