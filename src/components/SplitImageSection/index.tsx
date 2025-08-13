import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

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
      className={cn(
        align === "left" ? "flex-row" : "flex-row-reverse",
        variation === "dark" && "bg-dark-gray",
        "flex items-center justify-between w-full container p-20 rounded-[3rem]",
      )}
    >
      <div className="flex flex-col gap-11">
        <div className="max-w-lg">
          <span className="text-primary font-bold text-xl">{subtitle}</span>
          <h2 className="text-[2.6rem] mt-2 leading-tight font-bold">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-11 gap-x-6">
          {items &&
            items.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 max-w-[16rem]">
                {item.icon}
                <span className="text-lg">{item.description}</span>
              </div>
            ))}
        </div>
      </div>

      {children && children}
    </motion.section>
  );
}
