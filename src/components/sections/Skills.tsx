"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import WaveLine from "@/components/ui/WaveLine";
import { techStack } from "@/data/techStack";

interface Skill {
  name: string;
  file: string;
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const skills = techStack as Skill[];

  // desktop inverted triangle pattern
  const pattern = [6, 5, 4, 3, 4, 5];
  const rows: Skill[][] = [];

  let index = 0;
  for (const size of pattern) {
    rows.push(skills.slice(index, index + size));
    index += size;
    if (index >= skills.length) break;
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          flex flex-col justify-center
          min-h-screen
        "
      >
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          What I build with.
          <div className="w-3/4 sm:w-full max-w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        {/* ---------------- MOBILE LAYOUT ---------------- */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-x-6 gap-y-10 place-items-center">
            {skills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* ---------------- DESKTOP LAYOUT ---------------- */}
        <div className="hidden md:flex flex-col gap-16">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-14"
            >
              {row.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  const [error, setError] = useState(false);

  return (
    <div className="group flex flex-col items-center">
      <div className="relative overflow-hidden">
        {/* glow */}
        <div
          className="
            absolute inset-0 rounded-full blur-xl md:blur-2xl
            bg-black/10 dark:bg-white/10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* icon container */}
        <div
          className="
            relative z-10
            w-16 h-16 md:w-20 md:h-20
            flex items-center justify-center
            rounded-full
            bg-background
            border border-foreground/10
            backdrop-blur-md
          "
        >
          {error ? (
            <span className="text-xs text-center px-1 text-foreground/70">
              {skill.name}
            </span>
          ) : (
            <Image
              src={`/tech/${skill.file}`}
              alt={skill.name}
              width={36}
              height={36}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              onError={() => setError(true)}
            />
          )}
        </div>
      </div>

      {/* label */}
      <span
        className="
          mt-3 text-xs md:text-sm font-medium
          text-foreground/80
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        {skill.name}
      </span>
    </div>
  );
}
