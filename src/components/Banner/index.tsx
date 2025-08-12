import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { itemVariants } from "@/utils/animations.ts";

type BannerProps = {
  title: React.ReactNode;
  children?: React.ReactNode;
};

export default function Banner({ title, children }: BannerProps) {
  return (
    <motion.section
      variants={itemVariants}
      className={cn(
        children ? "justify-between" : "justify-center",
        "relative overflow-hidden flex flex-col xl:flex-row items-center container mx-auto py-12 px-14 rounded-2xl",
      )}
    >
      <div className="absolute inset-0 bg-[url('/background--gradient.png')] bg-cover bg-center opacity-50"></div>
      <motion.h3
        variants={itemVariants}
        className={cn(
          children ? "text-left text-[5rem]" : "text-center text-[5.25rem]",
          "relative font-bold uppercase leading-tight max-lg:text-center",
        )}
      >
        {title}
      </motion.h3>
      {children && <motion.div variants={itemVariants}>{children}</motion.div>}
    </motion.section>
  );
}
