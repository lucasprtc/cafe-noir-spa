// LenisContext.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1,
      lerp: 0.08,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
    });
    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => instance.destroy();
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

export const useLenis = () => useContext(LenisContext);
