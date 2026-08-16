import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FolderKanban, Home, Mail, UserRound } from 'lucide-react';
import { LayoutGroup, motion } from 'motion/react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'experience', label: 'Work', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const;

type SectionId = (typeof tabs)[number]['id'];

const getActiveSection = (): SectionId => {
  const offset = 96;
  let current: SectionId = 'home';

  for (const tab of tabs) {
    const el = document.getElementById(tab.id);
    if (el && el.getBoundingClientRect().top - offset <= 0) {
      current = tab.id;
    }
  }

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
  if (nearBottom) return 'contact';

  return current;
};

const scrollToSection = (id: SectionId) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const MobileNav = () => {
  const [active, setActive] = useState<SectionId>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      setActive(getActiveSection());
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="lg:hidden">
      <motion.header
        initial={false}
        animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 pointer-events-none"
      >
        <div className="pointer-events-auto border-b border-white/10 bg-background/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
          <div className="flex items-center justify-between h-12 px-4">
            <p className="text-sm font-semibold tracking-tight text-foreground">Aiman Naeem</p>
            <Link
              to="/resume"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Resume
            </Link>
          </div>
        </div>
      </motion.header>

      <nav
        className="fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-background/85 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]"
        aria-label="Mobile sections"
      >
        <LayoutGroup>
          <div className="grid grid-cols-5 px-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  className={cn(
                    'relative flex flex-col items-center justify-center gap-0.5 py-2 min-h-[56px] transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-tab-pill"
                      className="absolute top-1.5 h-8 w-12 rounded-full bg-primary/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.4 : 1.8}
                    className="relative z-10"
                  />
                  <span className="relative z-10 text-[10px] font-medium leading-none">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </nav>
    </div>
  );
};

export default MobileNav;
