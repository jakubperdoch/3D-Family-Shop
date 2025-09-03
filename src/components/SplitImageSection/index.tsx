import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { itemVariants } from "@/utils/animations.ts";

type SplitImageSectionProps = {
  title: string;
  subtitle: string;
  items: {
    icon: React.ReactNode;
    description: string;
  }[];
  align?: "left" | "right";
  variation?: "default" | "dark";
  children?: React.ReactNode;
};

export default function SplitImageSection({
  title,
  subtitle,
  items,
  align = "left",
  variation = "default",
  children,
}: SplitImageSectionProps) {
  return (
    <motion.section
      variants={itemVariants}
      className={cn(
        align === "left"
          ? "flex-col max-lg:gap-10 lg:flex-row"
          : "flex-col-reverse  max-lg:gap-10 lg:flex-row-reverse",
        variation === "dark" && "bg-dark-gray",
        "flex items-center justify-between w-full container pt-16 pb-10 lg:p-20 rounded-[3rem]",
      )}
    >
      <div className="flex flex-col gap-11">
        <div className="max-w-lg max-md:text-center">
          <span className="text-primary font-bold text-xl">{subtitle}</span>
          <h2 className="text-3xl md:text-[2.6rem] mt-2 leading-tight font-bold">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-y-11 gap-x-6 max-md:items-center max-md:justify-center">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 max-w-[16rem] max-md:items-center max-md:text-center"
              >
                {item.icon}
                <span className="text-medium md:text-lg">
                  {item.description}
                </span>
              </div>
            ))}
        </div>
      </div>

      {children && children}
    </motion.section>
  );
}
