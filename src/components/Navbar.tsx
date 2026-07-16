import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const onLightSection = ['about', 'experience', 'education'].includes(active);
  const useLightNav = scrolled && onLightSection;
  let navClass = 'bg-transparent';

  if (useLightNav) {
    navClass = 'glass-nav-light shadow-sm shadow-gray-200/60';
  } else if (scrolled) {
    navClass = 'glass-strong shadow-lg shadow-black/20';
  }

  const desktopLinkClass = (id: string) => {
    if (active === id) {
      return useLightNav ? 'text-ink-900' : 'text-white';
    }

    return useLightNav ? 'text-gray-500 hover:text-ink-900' : 'text-white/60 hover:text-white';
  };

  const mobileLinkClass = (id: string) => {
    if (active === id) {
      return useLightNav ? 'text-ink-900 bg-ink-900/8' : 'text-white bg-white/10';
    }

    return useLightNav
      ? 'text-gray-500 hover:text-ink-900 hover:bg-ink-900/5'
      : 'text-white/60 hover:text-white hover:bg-white/5';
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleClick('home')}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className={useLightNav ? 'text-gradient-purple' : 'text-gradient-static'}>AM</span>
            <span className={useLightNav ? 'text-ink-900/40' : 'text-white/50'}>.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${desktopLinkClass(link.id)}`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="navActive"
                    className={`absolute inset-0 -z-10 rounded-xl ${
                      useLightNav
                        ? 'bg-ink-900/8 border border-ink-900/10'
                        : 'bg-white/10 border border-white/15'
                    }`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${
              useLightNav ? 'text-ink-900' : 'text-white'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${
              useLightNav ? 'glass-nav-light' : 'glass-strong'
            }`}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300 ${mobileLinkClass(link.id)}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
