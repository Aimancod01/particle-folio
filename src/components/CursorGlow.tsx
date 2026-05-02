import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

const CursorGlow = () => {
  const mousePosition = useMousePosition();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.15 },
    });
  }, [mousePosition, controls]);

  return (
    <motion.div
      animate={controls}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ willChange: 'transform' }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, hsla(330, 70%, 60%, 0.08) 0%, hsla(270, 100%, 70%, 0.03) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
