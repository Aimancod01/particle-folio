import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaWordpress,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiFramer,
  SiExpo,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbApi } from 'react-icons/tb';
import { motion } from 'motion/react';

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <FaReact /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Firebase', icon: <IoLogoFirebase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'API', icon: <TbApi /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Expo', icon: <SiExpo /> },
  { name: 'Docker', icon: <FaDocker /> },
];

export default function Technologies() {
  return (
    <section>
      <motion.h2
        className="text-sm font-bold text-muted-foreground mb-8 flex items-center gap-4 tracking-widest uppercase"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-12 h-[1px] bg-foreground/20"></span>
        Technologies
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-muted/10 backdrop-blur-md flex flex-col items-center justify-center p-5 rounded-xl shadow-md border border-white/10 group hover:border-primary/30 hover:bg-primary/5 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.06, y: -6 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-4xl text-accent mb-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
            </motion.div>
            <p className="text-xs text-muted-foreground">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
