"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface IntroContextType {
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: ReactNode }) => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <IntroContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error('useIntro must be used within IntroProvider');
  }
  return context;
};