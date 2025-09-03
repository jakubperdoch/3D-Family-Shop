import type { JSX } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Button } from "@heroui/react";
import { cn } from "@/utils";

type PricingCardProps = {
  title: string;
  icon: JSX.Element;
  price: string;
  description: string;
  features: string[];
  type?: "standard" | "premium";
};

export default function PricingCard({
  title,
  icon,
  price,
  description,
  features,
  type = "standard",
}: PricingCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        type === "premium" ? "bg-black" : "bg-dark-gray",
        "relative flex flex-col gap-7 w-fit p-8 pb-6 md:p-10 md:pb-8 rounded-4xl md:rounded-[3rem] max-lg:mx-auto",
      )}
    >
      {type === "premium" && (
        <motion.div className="absolute rounded-4xl md:rounded-[3rem] inset-0 bg-[url('/background--gradient.webp')] bg-cover bg-center opacity-40"></motion.div>
      )}

      <div className="max-w-[25rem] relative z-10">
        {icon && (
          <div className="bg-white/90 w-fit p-3 rounded-2xl mb-5">{icon}</div>
        )}

        <div className="flex justify-between items-center gap-3 mb-3">
          {title && (
            <h3 className="text-3xl md:text-[2.75rem] font-medium">{title}</h3>
          )}

          {type === "premium" && (
            <div className="border border-white rounded-lg px-3 py-1 bg-black/20">
              <p className="text-md">Najobľúbenejšie</p>
            </div>
          )}
        </div>

        {description && (
          <p className="text-xl md:text-2xl text-white/80 font-light mb-6">
            {description}
          </p>
        )}
        {price && (
          <p className="text-4xl md:text-[3.75rem] font-medium">{price}</p>
        )}
      </div>

      <hr className="border-[#E7EBFF]" />

      {features && (
        <ul className="flex flex-col gap-4 relative z-10 mb-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-lg md:text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M5.59961 14.7C14.3496 22.05 16.0996 21.7 22.7496 8.40002"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Button
        aria-label={`Získať školenie ${title}`}
        color={"primary"}
        size={"lg"}
        className="text-white"
      >
        Získať školenie {title}
      </Button>
    </motion.div>
  );
}
