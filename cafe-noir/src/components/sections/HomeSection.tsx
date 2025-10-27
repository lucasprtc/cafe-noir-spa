// src/components/sections/About.tsx
"use client";

import { use, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const coffeeImgRef = useRef<HTMLImageElement>(null);
  const discutionImgRef = useRef<HTMLImageElement>(null);
  const AboutTextRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);
  const imagePinSection = useRef<HTMLDivElement>(null);
  const holdCupRef = useRef<HTMLImageElement>(null);
  const menInstallRef = useRef<HTMLImageElement>(null);
  
  // 👇 Hook pour changer l’image selon la taille d’écran
  const [cupBg, setCupBg] = useState("/About/test.png");
  const [gridGap, setGridGap] = useState(24);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 768) {
        setCupBg("/About/HoldCup.webp"); // 👉 image desktop
        setGridGap(24);
      } else {
        setCupBg("/About/test.webp"); // 👉 image mobile
        setGridGap(16);
      }
    };

    updateBg(); // initialisation
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

    useEffect(() => {
      if (!AboutTextRef.current || !pinnedSectionRef.current || !imagePinSection.current || !menInstallRef.current || !holdCupRef.current) return;
      
      const ctx = gsap.context(() => {
        const isDesktop = window.innerWidth >= 768;
        
        const textHeight = AboutTextRef.current!.clientHeight;
        
        const startTargetMen = (imagePinSection.current?.clientHeight ?? 0)  * (isDesktop ? 0.32 : 0.40);
        const startTargetCup = (imagePinSection.current?.clientHeight ?? 0)  * (isDesktop ? 0.05 : 0.30);
        const endTarget = isDesktop ?
          holdCupRef.current!.clientHeight + 24 :
          AboutTextRef.current!.clientHeight + holdCupRef.current!.clientHeight + 32;
        const endTargetViewport = isDesktop ?
          imagePinSection.current!.clientHeight * 0.05 + holdCupRef.current!.height:
          imagePinSection.current!.clientHeight * 0.30 + holdCupRef.current!.height;


        if (isDesktop) {
          ScrollTrigger.create({
            trigger: pinnedSectionRef.current,
            start: `top top+=${startTargetCup}`,
            end: `bottom-=${textHeight} top+=${startTargetCup}`,
            pin: AboutTextRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }


        ScrollTrigger.create({
          trigger: imagePinSection.current,
          start: `top top`,
          end: `bottom-=${endTarget} top+=${endTargetViewport}`,
          pin: [holdCupRef.current],
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        ScrollTrigger.create({
          trigger: imagePinSection.current,
          start: `top+=${startTargetMen - startTargetCup} top`,
          end: `bottom-=${endTarget} top+=${endTargetViewport}`,
          pin: [menInstallRef.current],
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      return () => ctx.revert();
    }, []);

  return (
    <section id="home" ref={sectionRef} className="h-full relative">
      <img src="/About/mascotBlue.svg" alt="" className="sm:h-[40%] absolute z-0 top-[130vw] sm:top-[5%] md:top-[10%] lg:top-[5%] xl:top-24 sm:-right-30 md:right-0 lg:right-[10%]" />
      {/* 🧩 Contenu principal */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div ref={imagePinSection} className="grid-layout container-grid grid-gap relative h-full">
          <img ref={holdCupRef} src="/About/HoldCup.webp" alt="" className="col-start-4 col-span-3 md:col-start-9 md:col-span-4 absolute rounded top-[30%] md:top-[5%]" />
          <img ref={menInstallRef} src="/About/ManInstall.webp" alt="" className="col-start-1 col-span-3 md:col-start-5 md:col-span-4 absolute rounded top-[40%] md:top-[32%]" />
        </div>
      </div>
      <div className="h-svh relative overflow-hidden z-30">
        <img
          src="About/mascot.png"
          className="absolute z-30 w-[230px] right-[10%] -top-[20%]"
          alt=""
        />
        <div className="container-grid h-full grid-layout grid-gap md:content-center">
          <div className="col-start-1 col-span-6 md:col-span-4  z-30 pt-[30vw] sm:pt-[25vw] md:pt-0 md:pb-[12vw] lg:pb-0 lg:pt-10">
            <h1 className="font-bold text-dark-blue text-[4.8rem] lg:text-[8.5vw] text-nowrap leading-18 md:leading-[7.8vw]  ">
              Changing
              <br />
              the Way
              <br />
              the City
              <br />
              Drinks Coffee
            </h1>
            <h2 className="font-secondary text-dark-blue text-lg md:text-[2.4vw] leading-[2.4vw]">
              Your new daily rituals in Helsinki
            </h2>
          </div>
        </div>
      </div>

      {/* 🧩 Section About */}
      <section id="about" className="section-my container-grid grid-layout grid-gap z-10" ref={pinnedSectionRef}>
        <div className="col-span-6 md:col-span-8 md:col-start-5 grid grid-cols-6 md:grid-cols-8 grid-gap grid-rows-2 z-10">
          {/* <img
            src="/About/ManInstall.png"
            alt=""
            className="md:hidden object-cover w-full h-full col-span-3 md:col-span-4 row-start-1 col-start-4 rounded"
          /> */}
          <img
            ref={discutionImgRef}
            src="/About/discution.png"
            alt=""
            className="object-cover w-full h-full col-span-3 md:col-span-4 row-start-2 rounded"
          />
          <img
            ref={coffeeImgRef}
            src="/About/coffee.png"
            alt=""
            className="object-cover w-full h-full col-span-3 md:col-span-4 row-start-2 rounded"
          />
        </div>
        <div className="col-span-4 2xl:col-span-3 col-start-1 md:row-start-1">
          <div className="w-full h-fit" ref={AboutTextRef}>
            <h3 className="text-dark-blue text-2xl md:text-4xl lg:text-5xl font-bold col-span-3 md:col-span-4 md:col-start-1">
              About Us
            </h3>
            <p className="text-dark-blue text-base lg:text-lg font-primary col-span-4 md:col-start-1">
              At Café Noir, we believe coffee is more than a drink — it’s a daily
              ritual. Nestled in the heart of Helsinki, our space blends the calm
              of ultramarine hues, the warmth of natural wood, and the sleekness
              of stainless steel to create a moment of pause in the city’s rhythm.
              Each cup we serve embodies precision, creativity, and a bold sense
              of style — inviting you to slow down, reconnect, and experience
              coffee in a new way.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
