"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

import WaveLine from "../ui/WaveLine";
import Button from "@/components/ui/Button";
import { Tooltip } from "../ui/Tooltip-card";
import { projects } from "@/data/projects";

const projectTooltips: Record<string, string> = {
  "DevStudio": "Probably the most technically challenging thing I’ve built so far.",
  "SAM": "Where my interest in AI and real-world systems came together.",
  "Expenze": "Started as a side project, turned into something I actually use.",
  "Xcentic": "My first client project!",
  "Scribe": "Built this because I wanted a blog that felt calm, not noisy.",
  "Currency Converter": "One of my earliest projects",
  "Password Generator": "A small project, but my first step toward clean UI thinking.",
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const content = projects.map((project) => {
    const tooltipText = projectTooltips[project.title];

    const baseDescriptionContent = (
      <div className="flex flex-col gap-4">
        <span className="text-lg text-foreground/90 leading-relaxed">
          {project.description}
        </span>

        <div className="flex flex-wrap gap-2 my-2">
          {project.techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="
                px-2 py-1 text-xs font-medium rounded-md
                bg-foreground/5
                text-foreground/80
                border border-foreground/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          {project.github && <Button text="GitHub" href={project.github} />}
          {project.live && <Button text="Live Demo" href={project.live} />}
        </div>
      </div>
    );

    // Wrap the description content with the Tooltip if text exists corresponding to the title
    const description = tooltipText ? (
      <Tooltip content={tooltipText}>
        <span>{baseDescriptionContent}</span>
      </Tooltip>
    ) : (
      baseDescriptionContent
    );

    return {
      title: project.title,
      description: description,
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ),
    };
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportCenter = window.innerHeight / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCard(closestIndex);
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen bg-background text-foreground"
    >
      <div
        className="
          max-w-7xl mx-auto 
          px-8 sm:px-6 lg:px-8 
          flex flex-col 
          min-h-screen
          py-0
          pt-24
          pb-10
        "
      >
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          What I&apos;ve been working on.
          <div className="w-3/4 sm:w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column */}
            <div className="flex flex-col">
              {content.map((item, index) => {
                const isActive = activeCard === index;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="min-h-[80vh] flex items-center"
                  >
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.35,
                        filter: isActive ? "blur(0px)" : "blur(4px)",
                      }}
                      transition={{ duration: 0.35 }}
                      className={cn(
                        "max-w-xl transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/40"
                      )}
                    >
                      <h3 className="text-3xl font-heading font-semibold mb-6">
                        {item.title}
                      </h3>
                      {item.description}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="hidden lg:block sticky top-0 h-screen">
              <div className="flex items-center justify-center h-full w-full">
                <div
                  className="
                    h-[420px] w-full 
                    rounded-xl overflow-hidden 
                    border border-foreground/10 
                    shadow-xl
                    bg-background
                  "
                >
                  {content[activeCard]?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;