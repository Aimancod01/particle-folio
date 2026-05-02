import { motion } from 'motion/react';

interface ExperienceCardProps {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights?: string[];
}

const ExperienceCard = ({
  period,
  company,
  role,
  description,
  highlights,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative card-glow rounded-xl p-6 md:p-8 transition-all duration-300 border border-white/5 bg-background/50 backdrop-blur-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {company}
              </h3>
              <p className="text-lg font-medium gradient-text mt-1">{role}</p>
            </div>
            <motion.span
              className="self-start text-xs font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {period}
            </motion.span>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base">{description}</p>

          {highlights && highlights.length > 0 && (
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider opacity-80">
                Key Highlights
              </h4>
              <ul className="grid gap-3">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-sm text-muted-foreground/90 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <motion.span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    />
                    <span className="leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
