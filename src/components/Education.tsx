import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          variant="light"
          eyebrow="Education"
          title={<>Academic <span className="text-gradient-purple">foundation</span></>}
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-ink-900 via-accent to-transparent" />

          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 mb-8"
            >
              <div className="absolute left-4 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
              <div className="card-purple p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-0.5 text-xs font-medium text-purple-800">
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 flex items-center gap-2">
                  <GraduationCap size={20} className="text-purple-600" /> {edu.degree}
                </h3>
                <p className="text-sm text-ink-700 mt-1">{edu.institution}</p>
                <p className="text-sm text-ink-600 mt-2">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
