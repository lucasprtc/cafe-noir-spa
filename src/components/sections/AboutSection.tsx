"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Your GSAP animations here
  }, []);

  return (
    <section 
      id="Home" 
      ref={sectionRef}
    //   className="h-svh relative grid-layout grid-gap grid-container"
    >

    </section>  
  );
}