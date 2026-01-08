"use client";
import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable cursor on touch / mobile devices
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!mediaQuery.matches) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-black dark:bg-white rounded-full pointer-events-none transition-transform duration-200 ease-out z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default Cursor;
