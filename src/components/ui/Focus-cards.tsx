"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = {
  title: string;
  desc: string;
  src: string | StaticImageData;
  link?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-48 sm:h-60 md:h-60 lg:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />

        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-4 sm:py-6 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col space-y-2">
            <div className="text-sm sm:text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.title}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.desc}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        gap-8
        md:gap-20
        w-full
        max-w-5xl
        mx-auto
        mb-12
        px-4
        sm:px-8
      "
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
