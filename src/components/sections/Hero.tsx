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

    if (intervalRef.current) clearInterval(intervalRef.current);

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
    if (hoverCount === 3) return "Third time's the charm, huh?";
    if (hoverCount >= 4 && hoverCount <= 5)
      return "You're exactly who this site was built for.";
    if (hoverCount >= 6 && hoverCount <= 7)
      return "You're really enjoying this, aren't you?";
    return "";
  };

  const greeting = (
    <div
      className="relative mb-5 w-full flex flex-col items-center md:items-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-lg md:text-xl font-sans select-none transition-colors duration-200 hover:text-foreground/70">
        {text}
      </p>

      <div className="w-2/3 max-w-[260px] mt-2 md:mx-0">
        <WaveLine />
      </div>
    </div>
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          flex flex-col md:flex-row
          justify-center md:justify-between
          items-center
          min-h-screen
          gap-10 md:gap-12
          pt-24 sm:pt-28 md:pt-0
          pb-10 md:pb-0
        "
      >
        {/* TEXT */}
        <div
          className="
            w-full md:w-1/2
            flex flex-col
            justify-center
            items-center md:items-start
            text-center md:text-left
            z-10
          "
        >
          <Tooltip content={getTooltipContent()}>{greeting}</Tooltip>

          <h1
            className="
              text-[2.6rem]
              leading-[1.05]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-heading
              font-bold
              tracking-tight
            "
          >
            <span className="italic">I'm </span> Navya.
          </h1>

          <p
            className="
              text-[0.95rem]
              leading-relaxed
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-sans
              text-foreground/75
              mt-4
              max-w-[320px] md:max-w-lg
            "
          >
            A full stack web developer
          </p>

          <div className="mt-7 md:mt-10 flex justify-center md:justify-start w-full">
            <Button text="Resume" href="/Navya_Resume.pdf" />
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="
            w-full md:w-1/2
            h-[32vh]
            md:h-[70vh]
            relative
            flex
            justify-center
            items-center
            mt-4 md:mt-0x
            overflow-hidden
          "
        >
          <Image
            src="/hero.svg"
            alt="Navya - Full Stack Developer"
            fill
            priority
            className="object-contain md:object-cover transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
