import { motion } from 'framer-motion';
import { skillGroups } from '../data';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          variant="dark"
          eyebrow="Skills"
          title={<>The <span className="text-gradient-static">toolkit</span> I build with</>}
          subtitle="From Java microservices to React dashboards — the stack I use to ship production software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[var(--radius)] border border-purple-100 bg-white/95 p-6 text-ink-900 shadow-[0_4px_24px_rgba(76,29,149,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(76,29,149,0.18)]"
              >
                <div className="relative h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink-900">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-purple-100 bg-white px-2.5 py-1 text-xs text-ink-700 transition-all duration-300 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-ink-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
