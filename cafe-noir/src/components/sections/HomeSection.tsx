// src/components/sections/About.tsx
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const coffeeImgRef = useRef<HTMLImageElement>(null);
  const manInstallRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroContainerRef.current || !sectionRef.current || !coffeeImgRef.current || !manInstallRef.current) return;

    const hero = heroContainerRef.current;
    const coffee = coffeeImgRef.current;
    const manInstall = manInstallRef.current;
    const coffeeBound = coffee.getBoundingClientRect();
    const manInstallBound = manInstall.getBoundingClientRect();

    // 🔍 Récupère la position et taille de l'image cible
    const updateAnimation = () => {
      console.log(coffee, coffee.getBoundingClientRect());
      

      // Décale la position par rapport au viewport (pour GSAP)

      // Animation GSAP synchronisée avec le scroll
      gsap.to(hero, {
        x: coffeeBound.x, // déplacement horizontal vers l'image
        y: manInstallBound.y, // déplacement vertical vers l'image
        width: coffeeBound.width, // adapte la largeur
        height: coffeeBound.height, // adapte la hauteur
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom-=200 bottom",
          scrub: 0.3,
          markers: true, // pour debug
        },
        ease: "none",
      });
    };

    // Lance l’animation et la met à jour au resize
    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);

  return (
    <section 
      id="Home" 
      ref={sectionRef}
      className="h-full relative"
    >
        <div
            className="absolute h-svh w-full grid-layout container-grid content-end overflow-hidden z-10"
            ref={heroContainerRef}
            style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 38.3%, rgba(0,0,0,0) 50.51%), linear-gradient(0deg, rgba(22,22,22,0.1) 0%, rgba(22,22,22,0.1) 100%), url('/About/test.png') lightgray 50% / cover no-repeat",
            backgroundPosition: 'center 30%',
            }}
        >
            <img src="/About/mascot.png" className='col-span-4 -translate-x-[20%] translate-y-[40%]' alt="" />
        </div>
        <div className="h-svh relative overflow-hidden z-30">
            <img src="About/mascot.png" className='absolute z-30 w-[230px] right-[10%] -top-[20%]' alt="" />
            <div className="container-grid h-full grid-layout content-center ">
                <div className="col-start-1 col-span-5 z-30 pb-[120px]">
                    <h1 className="font-bold text-almond text-[4.8rem] leading-18">Changing<br/>the Way<br/>the City<br/>Drinks Coffee</h1>
                    <h2 className='font-secondary text-almond text-lg leading-4'>Your new daily rituals in Helsinki</h2>
                </div>
            </div>
            {/* <div className="absolute h-full top-0 left-0 w-full z-20">
                <div
                    className="h-full w-full grid-layout container-grid content-end overflow-hidden z-20"
                    ref={heroContainerRef}
                    style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.3) 38.3%, rgba(0,0,0,0) 50.51%), linear-gradient(0deg, rgba(22,22,22,0.1) 0%, rgba(22,22,22,0.1) 100%), url('/About/test.png') lightgray 50% / cover no-repeat",
                    backgroundPosition: 'center 30%',
                    }}
                >
                    <img src="/About/mascot.png" className='col-span-4 -translate-x-[20%] translate-y-[40%]' alt="" />
                </div>
            </div> */}
        </div>
        <div className='section-my container-grid grid-layout z-10'>
            <div className="col-span-6 grid-layout grid-rows-2 z-10">
                <img ref={manInstallRef} src="/About/ManInstall.png" alt=""  className='col-span-3 row-start-1 col-start-1 rounded'/>
                <img src="/About/discution.png" alt="" className="col-span-3 row-start-2 col-start-1 rounded" />
                <img ref={coffeeImgRef} src="/About/coffee.png" alt="" className="col-span-3 row-start-2 col-start-4 rounded" />
            </div>
            <h3 className='text-dark-blue text-2xl font-bold col-span-3'>About Us</h3>
            <p className="text-dark-blue text-base font-primary col-span-4">At Café Noir, we believe coffee is more than a drink — it’s a daily ritual. Nestled in the heart of Helsinki, our space blends the calm of ultramarine hues, the warmth of natural wood, and the sleekness of stainless steel to create a moment of pause in the city’s rhythm. Each cup we serve embodies precision, creativity, and a bold sense of style — inviting you to slow down, reconnect, and experience coffee in a new way.</p>
        </div>
    </section>  
  );
}
