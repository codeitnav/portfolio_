"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import WaveLine from "@/components/ui/WaveLine";
import { greetings } from "@/data/greetings";
import Button from "../ui/Button";
import { Tooltip } from "../ui/Tooltip-card";

export default function Hero() {
  const [text, setText] = useState("Greetings.");
  const [hoverCount, setHoverCount] = useState(0);

  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setHoverCount((prev) => prev + 1);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setText(greetings[randomIndex]);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const getTooltipContent = () => {
    if (hoverCount === 3) {
      return "Third time's the charm, huh?";
    }

    if (hoverCount >= 4 && hoverCount <= 5) {
      return "You're exactly who this site was built for.";
    }

    if (hoverCount >= 6 && hoverCount <= 7) {
      return "You're really enojoying this, aren't you?";
    }

    return "";
  };

  const greeting = (
    <div
      className="relative mb-6 w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className="text-lg md:text-xl font-sans select-none transition-colors duration-200 hover:text-foreground/70"
        style={{ lineHeight: "1.5" }}
      >
        {text}
      </p>

      <div className="w-3/4 sm:w-full max-w-[400px] mt-2 mx-auto">
        <WaveLine />
      </div>
    </div>
  );

  return (
    <section className="relative z-0 w-full min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-8 
          flex flex-col-reverse md:flex-row justify-between items-center 
          min-h-screen
          gap-8 md:gap-12
          py-6 sm:py-16 md:py-16 lg:py-24 xl:py-24
          mt-10 sm:mt-0
        "
      >
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start z-10 pb-8 md:pb-0">
          <Tooltip content={getTooltipContent()}>
            {greeting}
          </Tooltip>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight"
            style={{ lineHeight: "1" }}
          >
            <span className="italic">I'm </span> Navya.
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-foreground/80 mt-4 md:mt-6 max-w-lg"
            style={{ lineHeight: "1.5" }}
          >
            A full stack web developer
          </p>

          <div className="mt-8 md:mt-10">
            <Button text="Resume" href="/Navya_Resume.pdf" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative z-0 flex justify-center items-center pt-8 md:pt-12 overflow-hidden">
          <Image
            src="/hero.svg"
            alt="Navya - Full Stack Developer"
            fill
            className="object-cover object-center hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            priority
          />
        </div>
      </div>
    </section>
  );
}
