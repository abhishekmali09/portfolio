import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] bg-gradient-radial from-brand-blue/60 via-brand-cyan/20 to-transparent hidden md:block"
      style={{ transition: 'transform 0.15s ease-out' }}
    />
  );
}
