// src/components/sections/About.tsx
"use client";

import { use, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      if (!AboutTextRef.current || !pinnedSectionRef.current || !imagePinSection.current || !menInstallRef.current || !holdCupRef.current || !sectionRef.current) return;
      
      const ctx = gsap.context(() => {
        const isDesktop = window.innerWidth >= 768;
        
        const textHeight = AboutTextRef.current!.clientHeight;
        
        const startTargetMen = (imagePinSection.current?.clientHeight ?? 0)  * (isDesktop ? 0.34 : 0.15);
        const startTargetCup = (imagePinSection.current?.clientHeight ?? 0)  * (isDesktop ? 0.06 : 0.02);
        const endTarget = isDesktop ?
          holdCupRef.current!.clientHeight + 24 :
          AboutTextRef.current!.clientHeight + holdCupRef.current!.clientHeight + 16;
        const endTargetViewport = isDesktop ?
          imagePinSection.current!.clientHeight * 0.06 + holdCupRef.current!.height:
          imagePinSection.current!.clientHeight * 0.02 + holdCupRef.current!.height;


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
          start: `top top+=${isDesktop ? '0' : sectionRef.current!.clientHeight + 16}`,
          end: `bottom-=${endTarget} top+=${isDesktop ? endTargetViewport : sectionRef.current!.clientHeight + 16 + endTargetViewport}`,
          pin: [holdCupRef.current],
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        ScrollTrigger.create({
          trigger: imagePinSection.current,
          start: `top+=${startTargetMen - startTargetCup} top+=${isDesktop ? '0' : sectionRef.current!.clientHeight + 16}`,
          end: `bottom-=${endTarget} top+=${isDesktop ? endTargetViewport : sectionRef.current!.clientHeight + 16 + endTargetViewport}`,
          pin: [menInstallRef.current],
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      return () => ctx.revert();
    }, []);

  return (
    <section id="home" className="h-full relative overflow-hidden">
      <img src="/About/mascotBlue.svg" alt="" className="sm:h-[40%] md:h-[35%] lg:h-[40%] absolute z-0 top-[130vw] sm:top-[5%] md:top-[10%] lg:top-[5%] xl:top-24 sm:-right-30 md:-right-[20%] lg:-right-[30%] xl:right-[2%]" />
      <div className="container-grid grid-gap flex flex-col md:grid md:grid-cols-12 pb-9">
        <div ref={sectionRef} className="flex flex-col relative md:col-span-4">
          <div className="h-full md:h-screen grid grid-cols-6 md:flex md:items-center md:grid-cols-4 grid-gap ">
            <div className="col-start-1 col-span-6 md:col-span-4 md:h-fit  z-30 pt-[30vw] sm:pt-[25vw] md:pt-0 md:pb-[12vw] lg:pb-0 lg:pt-10">
              <h1 className="font-bold text-dark-blue text-[4.8rem] lg:text-[8.5vw] text-nowrap leading-18 md:leading-[7.8vw]  ">
                Changing
                <br />
                the Way
                <br />
                the City
                <br />
                Drinks Coffee
              </h1>
              <h2 className="font-secondary text-dark-blue text-lg md:text-[2.4vw] leading-[2.5vw]">
                Your new daily rituals in Helsinki
              </h2>
            </div>
          </div>
          <div className="hidden md:block flex-1" ref={pinnedSectionRef}>
            <div className="w-full col-span-5" ref={AboutTextRef}>
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
        </div>
        <div className="md:col-span-8 grid grid-cols-6 md:grid-cols-8 h-[125vh] md:h-[275vh] grid-gap grid-rows-1" ref={imagePinSection}>
          <div className="col-span-3 md:col-span-4 h-full flex flex-col justify-between relative">
            <img
              ref={menInstallRef}
              src="/About/ManInstall.webp"
              alt=""
              className="rounded absolute top-[15%] md:top-[34%]"
              />
            <div className=""></div>
            <img
              ref={discutionImgRef}
              src="/About/discution.png"
              alt=""
              className="object-cover w-full row-start-4 md:row-start-3 rounded"
            />
          </div>
          <div className="col-span-3 md:col-span-4 h-full flex flex-col justify-between relative">
            <img
              ref={holdCupRef}
              src="/About/HoldCup.webp"
              alt=""
              className="rounded z-20 w-full absolute top-[2%] md:top-[6%]"
              />
            <div className=""></div>
            <img
              ref={coffeeImgRef}
              src="/About/coffee.png"
              alt=""
              className="object-cover w-full rounded"
            />
          </div>
        </div>
        <div className="grid md:hidden grid-cols-6 grid-gap  2xl:col-span-3 col-start-1 md:row-start-1">
          <div className="w-full h-fit col-span-5">
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
      </div>
    </section>
  );
}
