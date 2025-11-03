"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useIntro } from "@/contexts/IntroContext";// ajuster le path

export default function IntroLoader() {
    const [show, setShow] = useState(true);
    const textRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { setIntroComplete } = useIntro(); // ← Récupère la fonction

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.to(
            textRef.current,
            { opacity: 1, duration: 0.3, ease: "power2.inOut" }
        );

        const timer = setTimeout(() => {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power4.inOut",
                    onComplete: () => {
                        setShow(false);
                        setIntroComplete(true); // ← Signale que l'intro est finie
                    },
                });
            }
        }, 700);

        return () => clearTimeout(timer);
    }, [setIntroComplete]);

    if (!show) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-dark-blue z-50 flex items-center justify-center"
        >
            <img ref={textRef} className="opacity-0 w-[300px] md:w-[400px]" src="/About/logo.svg" alt="" />
        </div>
    );
}