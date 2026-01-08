"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/Timeline";
import WaveLine from "../ui/WaveLine";

import ecell from "../../../public/experience/ecell.png";
import kiet from "../../../public/experience/kiet.png";
import sl from "../../../public/experience/softwarelance.png";
import xcentic from "../../../public/experience/xcentic.png"

const Experience = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={sl || "/placeholder.svg"}
            alt="Softwarelance"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-foreground text-sm sm:text-base md:text-lg font-bold">
              Softwarelance <br /> Full-stack Intern
            </h2>
            <h3 className="text-foreground/70 text-xs sm:text-sm md:text-base">
              Duration: January 2025 - March 2025
            </h3>
            <p className="text-foreground/80 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
              Gained hands-on experience in full-stack development using the MERN stack. Improved data flow efficiency
              and optimized performance while contributing to real-world web application projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={ecell || "/placeholder.svg"}
            alt="Entrepreneurship Cell"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-foreground text-sm sm:text-base md:text-lg font-bold">
              Entrepreneurship Cell <br /> Corporate Relations Supervisor
            </h2>
            <h3 className="text-foreground/70 text-xs sm:text-sm md:text-base">
              Duration: November 2023 - December 2024
            </h3>
            <p className="text-foreground/80 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
              Built corporate ties with 30+ companies and managed budgets for successful event execution.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={xcentic || "/placeholder.svg"}
            alt="Xcentic"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-foreground text-sm sm:text-base md:text-lg font-bold">
              Xcentic <br /> Web Developer Intern
            </h2>
            <h3 className="text-foreground/70 text-xs sm:text-sm md:text-base">
              Duration: September 2024 - November 2024
            </h3>
            <p className="text-foreground/80 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
              Gained hands-on experience in full-stack development using the MERN stack. Improved data flow efficiency
              and optimized performance while contributing to real-world web application projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={kiet || "/placeholder.svg"}
            alt="KIET Group Of Institutions"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-foreground text-sm sm:text-base md:text-lg font-bold">
              KIET Group Of Institutions <br /> Student
            </h2>
            <h3 className="text-foreground/70 text-xs sm:text-sm md:text-base">
              Duration: October 2023 - March 2027
            </h3>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-8 sm:px-12 lg:px-20
          flex flex-col justify-center
          min-h-screen
          pt-12
          pb-16
        "
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 md:mb-12 text-center text-foreground">
          My journey so far.
          <div className="w-3/4 sm:w-full max-w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
