import { projects } from '../data';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          variant="dark"
          eyebrow="Portfolio"
          title={<>Check Out Some of My <span className="text-gradient-static">Projects</span></>}
          subtitle="These projects have helped me develop my skills and understand the industry better."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
