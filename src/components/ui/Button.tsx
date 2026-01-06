import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        inline-flex items-center gap-2
        px-8 py-3
        rounded-full
        border border-foreground
        text-foreground
        font-sans font-medium
        transition-all duration-300 ease-in-out
        hover:bg-foreground
        hover:text-background
        hover:scale-105
        active:scale-95
        cursor-pointer
      "
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </a>
  );
};

export default Button;