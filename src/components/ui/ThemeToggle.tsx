"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? "light";

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center w-14 h-7 rounded-full
                 bg-foreground/20 transition-colors duration-300 
                 hover:bg-foreground/30"
    >
      <span
        className={`
          absolute top-1 left-1 h-5 w-5 rounded-full 
          transition-all duration-300
          ${theme === "dark" ? "translate-x-7 bg-yellow-300 shadow-lg" : "bg-foreground"}
        `}
      />

      <span
        className={`
          absolute right-2 text-xs transition-opacity duration-200
          ${theme === "light" ? "opacity-100" : "opacity-0"}
        `}
      >
        ☀️
      </span>

      <span
        className={`
          absolute left-2 text-xs transition-opacity duration-200
          ${theme === "dark" ? "opacity-100" : "opacity-0"}
        `}
      >
        🌙
      </span>
    </button>
  );
}
