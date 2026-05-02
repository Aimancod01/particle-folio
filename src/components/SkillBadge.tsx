import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SkillBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const SkillBadge = ({ children, variant = 'primary', className }: SkillBadgeProps) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-primary',
    secondary: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
    accent:
      'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
  };

  return (
    <motion.span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm',
        'hover:shadow-lg',
        variants[variant],
        className,
      )}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
  );
};

export default SkillBadge;
