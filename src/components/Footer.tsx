import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { profile } from '../data';

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="section-dark border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <button onClick={() => scrollTo('home')} className="font-display text-lg font-bold">
              <span className="text-gradient-static">AM</span>
              <span className="text-white/50">.</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} className="h-10 w-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Abhishek Mali. All rights reserved.</p>
          <button onClick={() => scrollTo('home')} className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-300">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
