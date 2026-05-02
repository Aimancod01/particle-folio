import ParticleBackground from '@/components/ParticleBackground';
import SkillBadge from '@/components/SkillBadge';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MailCheck, FileUser, FileText } from 'lucide-react';
import Technologies from '@/components/Technologies';
import { Link } from 'react-router-dom';
import cImg from '../assets/images/charles.png';
import cImg2 from '../assets/images/charles2.png';
import caseImg from '../assets/images/case.png';
import caseImg1 from '../assets/images/case1.png';
import hImg from '../assets/images/host.png';
import hImg1 from '../assets/images/host1.png';
import aImg from '../assets/images/apc.png';
import iImg from '../assets/images/innerquest.png';
import eImg from '../assets/images/ig1.png';
import lear1 from '../assets/images/lear1.png';
import lear2 from '../assets/images/lear2.png';
import ContactForm from '@/components/ContactForm';
import BlurText from '@/components/text/BlurText';
import CursorGlow from '@/components/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import MagneticButton from '@/components/MagneticButton';
import { motion } from 'motion/react';

const Index = () => {
  return (
    <div className="max-w-[85rem] mx-auto bg-background min-h-screen flex flex-col lg:flex-row relative">
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />

      <div className="w-full lg:w-6/12 lg:sticky lg:top-0 lg:h-screen p-8 lg:p-16 flex flex-col justify-center relative z-10 backdrop-blur-[2px]">
        <div className="max-w-xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BlurText
              text="Hey there, I'm Aiman Naeem! 👋"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl sm:text-3xl mb-4 font-medium text-foreground/90 tracking-tight"
            />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Delivering
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x bg-[length:200%_auto]">
              {' '}
              the best{' '}
            </span>
            <br />
            in design and code.
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SkillBadge
              variant="primary"
              className="text-sm py-1.5 px-4 shadow-lg shadow-primary/10"
            >
              React / Next.js
            </SkillBadge>
            <SkillBadge
              variant="secondary"
              className="text-sm py-1.5 px-4 shadow-lg shadow-secondary/10"
            >
              React Native
            </SkillBadge>
            <SkillBadge variant="accent" className="text-sm py-1.5 px-4 shadow-lg shadow-accent/10">
              Backend (Node, Firebase)
            </SkillBadge>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Where Code Meets Creativity: Building Digital Experiences that Matter. From intuitive
            interfaces to powerful backend systems, I create solutions that engage and inspire.
          </motion.p>

          <motion.div
            className="flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <MagneticButton>
              <a href="https://github.com/Aimancod01" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-2 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github size={22} />
                </Button>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/aimannaeem1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Linkedin size={22} />
                </Button>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aimannaeem80@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-2 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <MailCheck size={22} />
                </Button>
              </a>
            </MagneticButton>

            <MagneticButton>
              <Link to="/resume">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <FileText size={22} />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-7/12 lg:ml-auto relative min-h-screen">
        <div className="p-6 md:p-12 lg:p-16 space-y-16 lg:space-y-24 pb-32">
          <AnimatedSection id="about" delay={0.1}>
            <h2 className="text-sm font-bold text-muted-foreground mb-8 flex items-center gap-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-foreground/20"></span>
              About Me
            </h2>
            <div className="card-glow rounded-2xl p-8 bg-background/40 backdrop-blur-sm border border-white/5 shadow-2xl shadow-black/5 group hover:border-primary/20 transition-all duration-500">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm a{' '}
                <span className="text-foreground font-semibold">full-stack developer</span> based in
                Lahore, started in 2023. I build{' '}
                <span className="text-foreground font-semibold bg-gradient-to-r from-primary/20 to-transparent px-1 rounded">
                  web and mobile apps
                </span>{' '}
                with React, Next.js, and React Native — frontend is my strongest suit but I go full
                stack when needed. Lately I've been integrating{' '}
                <span className="text-foreground font-semibold">AI APIs</span> into real products,
                which has become the most interesting part of my work.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection id="experience" delay={0.2}>
            <h2 className="text-sm font-bold text-muted-foreground mb-8 flex items-center gap-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-foreground/20"></span>
              Work Experience
            </h2>
            <div className="space-y-8">
              <ExperienceCard
                period="Dec 2025 – Present"
                company="Tekxai"
                role="Full-Stack Developer"
                description="At Tekxai I work across the full product lifecycle building React and Next.js web apps, shipping React Native mobile features, and connecting them to Node/Express APIs. A big part of my current work involves AI integration — connecting LLM and vision APIs into real products. I also do code reviews and help set frontend patterns for the team."
                highlights={[
                  'Build high-performance web and mobile applications using React.js, Next.js, and React Native.',
                  'Improve rendering speed, load times, and cross-browser/device compatibility through optimized frontend practices.',
                  'Guide and mentor junior engineers, providing code reviews, best practices, and workflow improvements.',
                  'Leverage AI tools to automate repetitive tasks, improve code quality, and accelerate development.',
                  'Collaborate with designers, product managers, and backend engineers in an Agile environment to deliver user-centric features efficiently.',
                ]}
              />

              <ExperienceCard
                period="Nov 2023 - Dec 2025"
                company="Yodo Designs"
                role="Full-Stack Developer"
                description="YODO was where I got my real reps in. Over nearly two years I built and maintained multiple client products web with Next.js and React, mobile with React Native handling everything from component architecture to state management with Redux Toolkit and Zustand. I regularly touched backend integrations, API design, and auth flows, and picked up a lot around performance that actually matters in production."
                highlights={[
                  'Spearheaded UI architecture enhancements, resulting in a 20% increase in application performance and a 15% boost in user engagement.',
                  'Designed and implemented responsive web and mobile interfaces, ensuring consistency across diverse devices and screen sizes.',
                  'Managed complex application states using Redux Toolkit, Zustand, and Context API while integrating RESTful APIs for dynamic data handling.',
                  'Collaborated closely with UI/UX designers to translate wireframes into functional features, leveraging Git for version control and streamlined workflows.',
                  'Developed mobile apps using React Native, integrating APIs and ensuring smooth cross-platform performance.',
                  'Utilized Next.js for static site generation to improve web application load times and SEO performance.',
                ]}
              />

              <ExperienceCard
                period="May 2023 - Jul 2023"
                company="Cycarts"
                role="Full-Stack Developer"
                description="My first real exposure to production code. Built full-stack features using the MERN stack REST APIs, authentication flows, and responsive UI components. Short stint but it confirmed I wanted to do this seriously."
                highlights={[
                  'Developed responsive and user-friendly UIs with React.js, ensuring seamless experiences across desktop and mobile devices.',
                  'Designed and implemented RESTful APIs to enable efficient communication between frontend and backend systems.',
                  'Architected and optimized database schemas, ensuring data integrity, scalability, and performance.',
                  'Collaborated with stakeholders to gather requirements and transform them into functional features within tight timelines.',
                  'Utilized Git and agile practices to manage version control, code reviews, and collaborative development workflows.',
                ]}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection id="projects" delay={0.1}>
            <div className="relative">
              <h2 className="text-sm font-bold text-muted-foreground mb-8 flex items-center gap-4 tracking-widest uppercase relative">
                <motion.span
                  className="w-12 h-[1px] bg-gradient-to-r from-transparent to-foreground/20"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                Featured Projects
                <motion.span
                  className="w-12 h-[1px] bg-gradient-to-l from-transparent to-foreground/20"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </h2>
            </div>
            <div className="space-y-12">
              <ProjectCard
                title="Ask Charles"
                description="Ask Charles is an AI-powered web app that helps people evaluate items they've inherited or collected (antiques, estate items, etc.). Users upload 1–4 photos and/or describe an item, and Charles returns a structured assessment with value range, identifying details, and authenticity notes, plus advice on whether to keep, sell, or get a formal appraisal. The app includes a chat interface, image uploads, real-time analysis via WebSockets, auth, checkout/subscriptions, and an admin panel for users, prompts, and response rules."
                technologies={[
                  'React',
                  'ElevenLabs',
                  'AI/ML APIs',
                  'Stripe',
                  'Image Upload',
                  'Authentication',
                  'Admin Dashboard',
                ]}
                images={[cImg]}
                liveUrl="https://app.justaskcharles.com/"
              />

              <ProjectCard
                title="Learner Cruise"
                description="Learner Cruise is an AI-powered learning platform that helps students study smarter with a real-time Study Assistant. Learners can chat with the assistant and receive streamed, tutor-style responses, while the platform supports both signed-in and anonymous sessions. It includes student and admin experiences, plus an admin panel to manage AI providers/models and embedding settings used across features like study help and quiz summaries."
                technologies={[
                  'AI Study Assistant (LLM)',
                  'WebSockets (real-time streaming)',
                  'OpenAI (models + embeddings)',
                  'Ollama (local models)',
                  'Authentication',
                  'Admin Dashboard (LLM settings)',
                  'PWA (offline-ready installable app)',
                ]}
                images={[lear1]}
                liveUrl="https://learnerscruise.com/"
              />

              <ProjectCard
                title="Case Management App"
                description="A comprehensive medical-legal platform for managing patient cases from intake to settlement. Features complex workflows for medical and legal reviews, role-based dashboards, and automated task queues. Supports document management, integrated communication logs, and secure multi-tier approvals for streamlined efficiency across diverse staff roles."
                technologies={[
                  'React',
                  'Workflow Automation',
                  'Document Management',
                  'Role-based Access',
                  'Node.js',
                  'WebSockets',
                ]}
                images={[caseImg]}
                liveUrl="https://phpstack-1250693-6093995.cloudwaysapps.com/login"
              />

              <ProjectCard
                title="HostSwitch"
                description="A comprehensive property management platform that connects property owners with professional property managers, featuring advanced matching algorithms, proposal systems, real-time messaging, and integrated payment processing."
                technologies={[
                  'React',
                  'Node.js',
                  'MongoDB',
                  'Real-time Messaging',
                  'Payment Processing',
                  'Matching Algorithms',
                ]}
                images={[hImg]}
                liveUrl="https://phpstack-1250693-5681845.cloudwaysapps.com/login"
              />

              <ProjectCard
                title="ESA Helper"
                description="A real-time ESA management platform with multi-role access for parents, vendors, and admins. Features automated reimbursements, AI-driven curriculum generation, and secure payment handling with Stripe and Plaid integrations. Includes OCR-based receipt scanning, compliance tracking, and role-based dashboards for seamless ESA management."
                technologies={['React', 'Stripe', 'Plaid', 'OCR', 'Tailwind CSS']}
                images={[eImg]}
                liveUrl="https://esahelper.com/"
              />

              <ProjectCard
                title="APC"
                description="Ad playback and scheduling platform built with React, enabling users to create, schedule, and monitor ads across devices. Integrated Stripe payment validation to confirm bookings before generating dynamic ad playlists, and collaborated with backend/Python developers to design APIs for playlist creation and device communication."
                technologies={['React', 'Stripe', 'Python APIs', 'Zustand']}
                images={[aImg]}
                liveUrl="https://phpstack-1250693-5232557.cloudwaysapps.com/auth/login"
              />
              <ProjectCard
                title="InnerQuest"
                description="A self-discovery app that guides users through questions to uncover their life's purpose and generate AI-powered mission statements. Built with a React-based admin dashboard for managing content and analytics, along with a mobile app for an engaging user experience."
                technologies={['React', 'React Native', 'AI APIs', 'Material UI', 'Stripe']}
                liveUrl="https://play.google.com/store/apps/details?id=com.innerquest.app"
                images={[iImg]}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection id="technologies" delay={0.1}>
            <Technologies />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
