"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({
  content,
  children,
  containerClassName,
  typingSpeed = 30,
}: {
  content: string;
  children: React.ReactNode;
  containerClassName?: string;
  typingSpeed?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [height, setHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const triggerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice(
      typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    requestAnimationFrame(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    });
  }, [isVisible, content]);

  useEffect(() => {
    if (!isVisible || !content) {
      setTypedText("");
      return;
    }

    let i = 0;
    setTypedText("");

    const timer = setInterval(() => {
      if (i >= content.length) {
        clearInterval(timer);
        return;
      }
      i++;
      setTypedText(content.slice(0, i));
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [isVisible, content, typingSpeed]);

  const updatePosition = (e: React.MouseEvent<HTMLElement>) => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const tooltipWidth = 240;
    const tooltipHeight = height || 80;

    let x = e.clientX + 12;
    let y = e.clientY + 12;

    if (x + tooltipWidth > window.innerWidth) {
      x = e.clientX - tooltipWidth - 12;
    }

    if (y + tooltipHeight > window.innerHeight) {
      y = e.clientY - tooltipHeight - 12;
    }

    setPosition({ x, y });
  };

  return (
    <>
      <span
        ref={triggerRef}
        className={cn("relative inline-block", containerClassName)}
        onMouseEnter={(e) => {
          if (!content || isTouchDevice) return;
          setIsVisible(true);
          updatePosition(e);
        }}
        onMouseMove={(e) => {
          if (isTouchDevice) return;
          updatePosition(e);
        }}
        onMouseLeave={() => {
          if (isTouchDevice) return;
          setIsVisible(false);
        }}
      >
        {children}
      </span>

      {mounted &&
        !isTouchDevice &&
        createPortal(
          <AnimatePresence>
            {isVisible && content && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="
                  pointer-events-none fixed z-[9999]
                  min-w-[15rem] overflow-hidden rounded-md
                  border border-black/20 bg-yellow-300
                  shadow-md ring-1 ring-black/30
                "
                style={{
                  top: position.y,
                  left: position.x,
                }}
              >
                <div
                  ref={contentRef}
                  className="absolute invisible p-2 text-sm md:p-4"
                >
                  {content}
                </div>

                <div className="p-2 text-sm text-black md:p-4">
                  {typedText}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
