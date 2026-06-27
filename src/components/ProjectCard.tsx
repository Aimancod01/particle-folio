import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Link as LinkIcon, Smartphone, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  logo?: React.ReactNode;
  description: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  website?: string;
  audioUrl?: string;
}

const ProjectCard = ({
  title,
  logo,
  description,
  images = [],
  technologies,
  liveUrl,
  liveUrlLabel = 'Live Demo',
  appStoreUrl,
  githubUrl,
  website,
  audioUrl,
}: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ filter: 'blur(8px)' }}
      />
      <div className="relative h-full flex flex-col card-glow rounded-xl bg-background/50 backdrop-blur-sm border border-white/5 transition-all duration-300">
        <div className="p-6 md:p-8 flex-grow">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              {logo && (
                <motion.span
                  className="text-3xl filter drop-shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {logo}
                </motion.span>
              )}
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                {title}
              </h3>
            </div>
            {audioUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className={`flex items-center gap-2 rounded-full border-2 px-3 py-1.5 transition-all duration-300 ${
                  isPlaying
                    ? 'border-primary text-primary bg-primary/10'
                    : 'border-white/10 hover:border-primary hover:text-primary hover:bg-primary/10'
                }`}
              >
                {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span className="text-xs font-semibold">
                  {isPlaying ? 'Stop Voice' : 'Listen to Charles'}
                </span>
                <audio
                  ref={audioRef}
                  src={audioUrl}
                  onEnded={handleAudioEnded}
                  className="hidden"
                />
              </motion.button>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-base">{description}</p>

          <motion.div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground border border-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {images.length > 0 && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-2">
                {images.length === 1 ? (
                  <motion.div
                    className="relative aspect-video overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={images[0]}
                      alt={`${title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {images.slice(0, 2).map((src, i) => (
                      <motion.div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={src}
                          alt={`${title} preview ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {website && (
            <div className="flex items-center gap-2 mb-6 group/link">
              <LinkIcon
                size={14}
                className="text-primary group-hover/link:text-accent transition-colors"
              />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/20"
              >
                {website}
              </a>
            </div>
          )}
        </div>

        <div className="p-6 pt-0 mt-auto flex gap-3 border-t border-white/5 pt-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full gap-2 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 text-foreground border border-white/10"
                variant="ghost"
              >
                <ExternalLink size={16} />
                {liveUrlLabel}
              </Button>
            </motion.a>
          )}
          {appStoreUrl && (
            <motion.a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full gap-2 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 text-foreground border border-white/10"
                variant="ghost"
              >
                <Smartphone size={16} />
                App
              </Button>
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="ghost" className="w-full gap-2 hover:bg-white/5">
                <Github size={16} />
                Source
              </Button>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
