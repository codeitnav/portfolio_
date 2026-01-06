"use client";

import WaveLine from "../ui/WaveLine";
import Frame from "../ui/Frame";
import { Tooltip } from "../ui/Tooltip-card";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto 
          px-6 sm:px-12 lg:px-20
          flex flex-col justify-center
          min-h-screen
          py-12 md:py-0
        "
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 md:mb-12 text-center">
          About Me.
          <div className="w-3/4 sm:w-full max-w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* IMAGE */}
          <div className="flex justify-center order-2 md:order-1">
            <Frame imageSrc="/hero.png" />
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-lg md:text-xl font-sans text-foreground/90 leading-relaxed order-1 md:order-2">
            <div>
              I&apos;m a{" "}
              <Tooltip content="Frontend, backend, and the glue in between.">
                <span className="font-semibold text-[#D97A2B]">
                  full stack developer
                </span>
              </Tooltip>{" "}
              who enjoys building things that live on the internet and actually
              feel good to use. I like turning ideas into clean, responsive, and
              reliable products, from designing the interface to wiring up the
              backend logic that makes everything work.
            </div>

            <div>
              I spend most of my time crafting modern web applications,
              experimenting with new tools, and improving{" "}
              <Tooltip content="UX lives in the details.">
                <span className="font-semibold text-[#D97A2B]">
                  the small details
                </span>
              </Tooltip>{" "}
               that most people don&apos;t notice but definitely feel. I care about structure, performance, and writing code that future
              me won&apos;t hate.
            </div>

            <div>
              When I&apos;m not coding, I&apos;m usually reading, watching
              something cool, or thinking about how to make digital experiences
              simpler and smarter. I believe great software is built at the intersection of curiosity, consistency, and{" "}
              <Tooltip content="This guides how I work.">
                <span className="font-semibold text-[#D97A2B]">
                  thoughtful execution.
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;