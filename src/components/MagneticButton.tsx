import { motion, useAnimation } from 'motion/react';
import { useRef, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const MagneticButton = ({
  children,
  className = '',
  intensity = 0.3,
}: MagneticButtonProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      controls.start({
        x: x * intensity,
        y: y * intensity,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      });
    },
    [controls, intensity]
  );

  const handleMouseLeave = useCallback(() => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    });
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
