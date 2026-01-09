"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[2147483647]"
      style={{
        backgroundColor: "var(--foreground)",
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    />
  );
};

export default Cursor;
