import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ArrowDown, FolderGit2 } from 'lucide-react';
import { profile } from '../data';
const EASE = [0.4, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const roleLine = profile.heroRoles.join(' | ');

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${profile.heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -20,
          }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-5 py-28 text-center sm:px-8"
      >
        <motion.p
          variants={itemVariants}
          className="font-montserrat text-sm font-semibold uppercase tracking-[6px] text-white/80 sm:text-base md:text-lg"
        >
          Hello Everyone
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-6 font-display text-[3rem] font-extrabold leading-none tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          I&apos;m {profile.name.split(' ')[0]}{' '}
          <span className="text-gradient-static">{profile.name.split(' ').slice(1).join(' ')}</span>
          <span className="text-white">.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 font-serif-role text-base font-semibold uppercase tracking-[4px] text-white/90 sm:text-xl md:text-2xl"
        >
          {roleLine}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo('projects')} className="btn-white">
            <FolderGit2 size={18} />
            View Projects
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors duration-300 hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

