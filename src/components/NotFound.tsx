import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-display text-7xl sm:text-9xl font-bold text-gradient-static"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-slate-400"
      >
        This page doesn't exist. Let's get you back.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => (window.location.href = '/')}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 font-semibold text-white glow-blue"
      >
        <Home size={18} /> Back Home
      </motion.button>
    </div>
  );
}
