import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { projects } from '../data';

type Project = (typeof projects)[number];

const EASE = [0.4, 0, 0.2, 1] as const;
const TRANSITION = { duration: 0.4, ease: EASE };

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: EASE }}
      className="group relative card-glass overflow-hidden transition-shadow duration-500"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setActive(false);
      }}
      onClick={() => setActive((prev) => !prev)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.name}`}
    >
      <div
        className={[
          'relative overflow-hidden rounded-[calc(1rem-1px)]',
          'transition-shadow duration-500 ease-in-out',
          active ? 'glow-white' : '',
        ].join(' ')}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <motion.img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            animate={{ scale: active ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            loading="lazy"
          />

          <AnimatePresence>
            {active && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 bg-ink-900/80 backdrop-blur-[2px]"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8"
              >
                <motion.h3
                  variants={itemVariants}
                  className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  {project.name}
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="mt-2 font-montserrat text-xs font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-sm"
                >
                  {project.category}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base"
                >
                  {project.shortDescription}
                </motion.p>

                <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    variants={buttonVariants}
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-white !px-5 !py-2.5 !text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    variants={buttonVariants}
                    transition={{ ...TRANSITION, delay: 0.12 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-outline-white !px-5 !py-2.5 !text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
