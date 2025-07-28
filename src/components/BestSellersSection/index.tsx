import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Link } from "@tanstack/react-router";

const bestSellersCards: CardProps[] = [
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 19.99,
  },
  {
    id: "2",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 24.99,
  },
  {
    id: "3",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 29.99,
  },
  {
    id: "4",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 34.99,
  },
];

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
};

export default function BestSellersSection() {
  return (
    <RevealOnScroll
      variants={itemVariants}
      className="flex flex-col gap-8 container mx-auto"
    >
      <h2 className="font-bold text-[4.6rem] leading-20">
        Čerstvé dizajny,
        <br /> okamžite k objednaniu.
      </h2>

      <motion.div variants={itemVariants} className="flex flex-row gap-4">
        {bestSellersCards &&
          bestSellersCards.length > 0 &&
          bestSellersCards.map((card) => (
            <div key={card?.id} className="flex flex-col gap-4">
              <Image
                src={card?.image}
                className="border-5 border-white rounded-[1.75rem] "
                removeWrapper={true}
                alt={card?.title}
              />
              <h3 className="text-2xl font-bold">{card?.title}</h3>
              <Link
                to={"/products/$product"}
                className="w-full"
                params={{ product: card?.id }}
              >
                <Button className="bg-dark-gray w-full text-white py-2 px-4">
                  Zobraziť Produkt -{" "}
                  <span className="text-primary">{card?.price} €</span>
                </Button>
              </Link>
            </div>
          ))}
      </motion.div>
    </RevealOnScroll>
  );
}
