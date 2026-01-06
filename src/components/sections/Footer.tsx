"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import WaveLine from "../ui/WaveLine";
import { socials } from "@/data/socials";
import { Tooltip } from "../ui/Tooltip-card";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setTheme(
        (root.getAttribute("data-theme") as "light" | "dark") || "light"
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className="w-full font-medium text-lg px-6 mb-4 text-foreground"
    >
      <div className="max-w-7xl mx-auto">
        <WaveLine />

        <div className="py-8 flex flex-col gap-6 md:grid md:grid-cols-3 md:items-center">
          {/* Left text */}
          <div className="text-sm text-foreground/70 text-center md:text-left font-semibold leading-relaxed">
            <span>You scrolled all the way down here.</span>
            <br />
            <span className="text-foreground/80">Respect!</span>
          </div>

          {/* Center socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src={theme === "dark" ? social.icon.dark : social.icon.light}
                  alt={social.name}
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>

          {/* Right signature */}
          <div className="flex flex-col items-center md:items-end text-sm text-foreground/70 font-semibold">
            <span className="flex items-center gap-1">
              
              <Tooltip content="Coffee is possibly humanity&apos;s greatest invention.">
                made with <span className="text-red-500">♥</span> and coffee
              </Tooltip>
            </span>
            <span className="text-foreground/80">by Navya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
