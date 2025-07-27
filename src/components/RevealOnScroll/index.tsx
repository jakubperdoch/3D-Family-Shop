"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import React, { useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  variants?: Variants;
  transition?: {
    duration?: number;
    delay?: number;
  };
};

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = "",
  once = true,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
