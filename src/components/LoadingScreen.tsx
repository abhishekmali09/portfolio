import { motion } from 'framer-motion';
import { profile } from '../data';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-brand"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      onAnimationComplete={() => setTimeout(onComplete, 1500)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="h-20 w-20 rounded-full border-2 border-brand-blue/30 border-t-brand-cyan animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xl font-bold text-gradient-static">AM</span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 font-display text-sm tracking-[0.3em] text-white/60 uppercase"
      >
        {profile.name}
      </motion.p>
    </motion.div>
  );
}
