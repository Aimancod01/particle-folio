import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Link as LinkIcon,
  Lock,
  Maximize2,
  Smartphone,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';

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

const getPreviewLabel = (url?: string) => {
  if (!url) return 'project preview';
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('play.google.com')) return 'play.google.com';
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return 'project preview';
  }
};

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const previewUrl = liveUrl || website || appStoreUrl;
  const previewLabel = getPreviewLabel(previewUrl);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const showPrev = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

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
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-background/70 backdrop-blur-md border border-white/10 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)]">
        {images.length > 0 && (
          <div className="relative">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-[#12121a]/90 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-center gap-2 mx-auto max-w-md px-3 py-1 rounded-md bg-white/[0.06] border border-white/5 text-[11px] text-muted-foreground">
                  <Lock size={10} className="text-emerald-400/80 shrink-0" />
                  <span className="truncate">{previewLabel}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="hidden sm:flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                aria-label={`Expand ${title} preview`}
              >
                <Maximize2 size={13} />
              </button>
            </div>

            <div className="relative overflow-hidden bg-[#0a0a12] group/preview project-preview">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="relative block w-full text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt={`${title} preview`}
                      loading="lazy"
                      initial={{ opacity: 0.4, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.06]"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-black/10 pointer-events-none" />
                  <div className="preview-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0 group-hover/preview:opacity-100" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md shadow-lg">
                      <Maximize2 size={15} />
                      View preview
                    </span>
                  </div>
                </div>
              </button>

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-foreground opacity-0 backdrop-blur-md transition-opacity group-hover/preview:opacity-100 hover:bg-black/70"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-foreground opacity-0 backdrop-blur-md transition-opacity group-hover/preview:opacity-100 hover:bg-black/70"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeIndex
                            ? 'w-5 bg-white'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Show screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="p-6 md:p-8 flex-grow">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              {logo && (
                <motion.span
                  className="text-3xl filter drop-shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {logo}
                </motion.span>
              )}
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {title}
              </h3>
            </div>
            {audioUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className={`flex items-center gap-2 rounded-full border-2 px-3 py-1.5 shrink-0 transition-all duration-300 ${
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

          <motion.div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/40 text-secondary-foreground border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.06, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {website && (
            <div className="flex items-center gap-2 mt-6 group/link">
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

        {(liveUrl || appStoreUrl || githubUrl) && (
          <div className="px-6 pb-6 mt-auto flex gap-3">
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
                  className="w-full gap-2 bg-gradient-to-r from-primary/15 to-accent/15 hover:from-primary/25 hover:to-accent/25 text-foreground border border-white/10"
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
                  className="w-full gap-2 bg-gradient-to-r from-primary/15 to-accent/15 hover:from-primary/25 hover:to-accent/25 text-foreground border border-white/10"
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
        )}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[94vw] sm:max-w-6xl p-0 border-0 bg-transparent shadow-none gap-0 overflow-visible [&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-black/55 [&>button]:p-1.5 [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-black/80">
          <DialogTitle className="sr-only">{title} preview</DialogTitle>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c14] shadow-2xl">
            <div className="flex items-center justify-between gap-3 px-4 py-3 pr-14 border-b border-white/10">
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{previewLabel}</p>
              </div>
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <ExternalLink size={12} />
                  Open live
                </a>
              )}
            </div>
            <div className="relative bg-black">
              <img
                src={activeImage}
                alt={`${title} full preview`}
                className="w-full max-h-[78vh] object-contain"
              />
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-foreground backdrop-blur-md hover:bg-black/80"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-foreground backdrop-blur-md hover:bg-black/80"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProjectCard;
