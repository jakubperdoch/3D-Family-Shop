import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Image } from "@heroui/image";
import { Button } from "@heroui/react";

type CardProps = {
  id: string;
  image: string;
  title: string;
};

interface BestSellersSectionProps {
  cards: CardProps[];
}

export default function BestSellersSection({ cards }: BestSellersSectionProps) {
  return (
    <motion.section
      variants={itemVariants}
      className="flex flex-col gap-8 container mx-auto"
    >
      <h2 className="font-bold text-[4.6rem] leading-20">
        Čerstvé dizajny,
        <br /> okamžite k objednaniu.
      </h2>

      <motion.div variants={itemVariants} className="flex flex-row gap-4">
        {cards &&
          cards.length > 0 &&
          cards.map((card) => (
            <div key={card?.id} className="flex flex-col gap-4">
              <Image
                src={card?.image}
                className="border-5 border-white rounded-[1.75rem] "
                removeWrapper={true}
                alt={card?.title}
              />
              <h3 className="text-2xl font-bold">{card?.title}</h3>
              <Button className="bg-dark-gray text-white py-2 px-4">
                Zobraziť Produkt
              </Button>
            </div>
          ))}
      </motion.div>
    </motion.section>
  );
}
