"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        className="flex flex-col justify-center items-end space-y-1"
      >
        <span className="w-6 h-[2px] bg-foreground transition-all"></span>
        <span className="w-4 h-[2px] bg-foreground transition-all"></span>
        <span className="w-5 h-[2px] bg-foreground transition-all"></span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="
            fixed top-16 right-4 z-40
            w-56 rounded-xl
            bg-background/90 backdrop-blur-xl
            shadow-2xl border border-foreground/10
            p-6 flex flex-col items-end space-y-4
            animate-fadeIn
          "
        >
          <Link href="#home" onClick={() => setOpen(false)} className="hover:opacity-70">
            Home
          </Link>

          <Link href="#about" onClick={() => setOpen(false)} className="hover:opacity-70">
            About
          </Link>

          <Link href="#skills" onClick={() => setOpen(false)} className="hover:opacity-70">
            Skills
          </Link>

          <Link href="#projects" onClick={() => setOpen(false)} className="hover:opacity-70">
            Projects
          </Link>

          <Link href="#experience" onClick={() => setOpen(false)} className="hover:opacity-70">
            Experience
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)} className="hover:opacity-70">
            Contact
          </Link>

          <a
            href="https://hashnode.com/@navya01"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:opacity-70"
          >
            Blogs
          </a>
        </div>
      )}
    </>
  );
}
