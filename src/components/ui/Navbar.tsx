"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark"
      | null;

    if (current) setTheme(current);

    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark";
      setTheme(t);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = theme === "dark" ? "/logo_light.png" : "/logo_dark.png";

  return (
    <nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${
      scrolled
        ? "h-14 md:h-16 bg-background/90 backdrop-blur-xl"
        : "h-20 md:h-24 bg-background md:bg-transparent"
    }
  `}
>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">

        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={50}
            height={50}
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px] object-contain py-2 cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-foreground font-semibold">
          <Link href="#about" className="hover:opacity-70 transition">About</Link>
          <Link href="#skills" className="hover:opacity-70 transition">Skills</Link>
          <Link href="#projects" className="hover:opacity-70 transition">Projects</Link>
          <Link href="#experience" className="hover:opacity-70 transition">Experience</Link>
          <Link href="#contact" className="hover:opacity-70 transition">Contact</Link>

          <a
            href="https://hashnode.com/@navya01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            Blogs
          </a>
          
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3 text-foreground">
          <ThemeToggle />
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}