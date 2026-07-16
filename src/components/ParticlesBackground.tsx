import { motion } from 'framer-motion';

export default function ParticlesBackground() {
  const particles = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-cyan/40"
            style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
            animate={{
              y: [0, -80, 0],
              x: [0, 40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
