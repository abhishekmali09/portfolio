import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = 'dark',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  variant?: 'dark' | 'light';
}) {
  const isDark = variant === 'dark';

  return (
    <div className="text-center mb-14">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${
          isDark ? 'text-white/70' : 'text-accent'
        }`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className={`mt-4 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
