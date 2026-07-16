import { motion } from 'framer-motion';
import { Target, Code2, Server, Sparkles } from 'lucide-react';
import { profile } from '../data';
import SectionHeading from './SectionHeading';

const highlights = [
  { icon: Code2, label: 'Java & Spring Boot', value: 'Backend Core' },
  { icon: Server, label: 'Microservices', value: 'Architecture' },
  { icon: Sparkles, label: 'AI Integration', value: 'Gemini + OpenAI' },
  { icon: Target, label: 'Clean Architecture', value: 'Production-Grade' },
];

export default function About() {
  return (
    <section id="about" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" >
        <SectionHeading
          variant="light"
          eyebrow="About Me"
          title={<>Engineer behind <span className="text-gradient-purple">scalable backends</span></>}
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start ">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-purple p-8"
          >
            <p className="text-ink-700 leading-relaxed text-lg">{profile.bio}</p>
            <div className="mt-6 pt-6 border-t border-purple-100">
              <h4 className="font-display font-semibold text-ink-900 mb-2 flex items-center gap-2">
                <Target size={18} className="text-purple-600" /> Career Objective
              </h4>
              <p className="text-ink-700 leading-relaxed">{profile.objective}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="card-purple-sm p-5"
                >
                  <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 mb-3">
                    <Icon size={20} />
                  </div>
                  <p className="font-display font-semibold text-sm text-ink-900">{h.label}</p>
                  <p className="text-xs text-ink-600 mt-0.5">{h.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
