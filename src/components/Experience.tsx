import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          variant="light"
          eyebrow="Experience"
          title={<>Where I&apos;ve <span className="text-gradient-purple">shipped code</span></>}
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ink-900 via-accent to-transparent sm:-translate-x-1/2" />

          {experience.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 sm:pl-0 sm:w-1/2 sm:pr-12 sm:text-right mb-8"
            >
              <div className="absolute left-4 sm:left-auto sm:right-0 top-2 sm:top-6 sm:translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20 sm:left-auto" />
              <div className="card-purple p-6">
                <div className="flex items-center gap-2 mb-2 sm:justify-end">
                  <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-medium text-purple-800">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{exp.role}</h3>
                <p className="flex items-center gap-1.5 text-sm text-ink-700 mt-1 sm:justify-end">
                  <Briefcase size={14} /> {exp.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-700 text-left sm:text-right">
                  {exp.points.map((point) => (
                    <li key={`${exp.role}-${point}`} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 sm:justify-end">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="rounded-xl bg-white border border-purple-100 px-2 py-0.5 text-xs text-purple-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
