"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export type Comment = {
    description: string;
    name: string;
    color: string;
}

interface Comments {
  comments: Comment[];
}

export default function InfiniteSLider({ comments }: Comments) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const scrollVelocityRef = useRef(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth / 2;
    const baseSpeed = 50;

    tweenRef.current = gsap.to(trackRef.current, {
      x: `-=${totalWidth}`,
      duration: totalWidth / baseSpeed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    const onWheel = (e: WheelEvent) => {
      scrollVelocityRef.current += Math.abs(e.deltaY);
    };



    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
      tweenRef.current?.kill();
    };
  }, []);

  const doubledImages = [...comments, ...comments];

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden relative flex items-center`}
    >
      <div ref={trackRef} className="flex gap-2 w-fit">
        {doubledImages.map((comment, index) => (
          <div
            className={`w-[230px] lg:w-[440px] rounded-[10px] flex flex-col gap-5 p-4 h-fit`}
            style={{backgroundColor: comment.color}}
            key={index}
          >
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.00429 0V3.64286C5.08154 3.9127 4.12017 4.99206 4.12017 7.62302V7.8254H6.66094V17H0V10.254C0 2.76587 2.67811 0.404765 7.00429 0ZM16 0V3.64286C14.0773 3.9127 13.1159 4.99206 13.1159 7.62302V7.8254H15.6567V17H8.99571V10.254C8.99571 2.76587 11.6738 0.404765 16 0Z" fill="#F49E3E"/>
            </svg>
            <p className="font-primary lg:text-lg text-almond">{comment.description}</p>
            <div className="flex flex-row justify-between items-center">
              <p className="font-secondary text-lg text-almond">{comment.name}</p>
              <svg className="rotate-180" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00429 0V3.64286C5.08154 3.9127 4.12017 4.99206 4.12017 7.62302V7.8254H6.66094V17H0V10.254C0 2.76587 2.67811 0.404765 7.00429 0ZM16 0V3.64286C14.0773 3.9127 13.1159 4.99206 13.1159 7.62302V7.8254H15.6567V17H8.99571V10.254C8.99571 2.76587 11.6738 0.404765 16 0Z" fill="#F49E3E"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
