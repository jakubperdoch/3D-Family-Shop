import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { FaPlus } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@heroui/react";

import type { JSX } from "react";

type Item = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: JSX.Element;
  subtitle: string;
  items: Item[];
};

export default function FaqSection({
  title,
  subtitle,
  items,
}: FaqSectionProps) {
  return (
    <motion.section
      variants={itemVariants}
      className="container mx-auto py-20 flex justify-between gap-8"
    >
      <div className="flex flex-col gap-2 max-w-md">
        <span className="text-primary text-lg font-bold uppercase">
          {subtitle}
        </span>
        <h2 className="text-[2.6rem] font-bold">{title}</h2>
      </div>

      <Accordion variant="splitted" className="max-w-3xl">
        {items &&
          items.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Question n. ${index}`}
              className="bg-dark-gray"
              title={<h4 className="font-bold">{item?.question}</h4>}
              indicator={<FaPlus color="#fff" />}
            >
              {item?.answer}
            </AccordionItem>
          ))}
      </Accordion>
    </motion.section>
  );
}
