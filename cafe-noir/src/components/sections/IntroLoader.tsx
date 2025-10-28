        "use client";

        import { useRef, useState, useEffect } from "react";
        import { gsap } from "gsap";

        export default function IntroLoader() {
        const [show, setShow] = useState(true);
        const textRef = useRef<HTMLImageElement>(null);
        const containerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            // Fade-in du texte

            const tl = gsap.timeline()
            
            tl.to(
            textRef.current,
            { opacity: 1, duration: 0.3, ease: "power2.inOut" }
            );
            

            // Disparition du loader après 1 seconde
            const timer = setTimeout(() => {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power4.inOut",
                onComplete: () => setShow(false),
                });
            }
            }, 700);

            return () => clearTimeout(timer);
        }, []);

        if (!show) return null;

        return (
            <div
            ref={containerRef}
            className="fixed inset-0 bg-blue-600 z-50 flex items-center justify-center"
            >
                <img ref={textRef} className="opacity-0 w-[300px] md:w-[400px]" src="/About/logo.svg" alt="" />
            </div>
        );
        }
