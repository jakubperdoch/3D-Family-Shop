import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import BestSellersSection from "@/components/BestSellersSection";
import CategoryCarousel from "@/components/CategoryCarousel";

export const Route = createFileRoute("/")({
  component: App,
});

const bestSellersCards = [
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: "2",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: "3",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: "4",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const categories = [
  {
    id: "1",
    title: "3D fotolampa",
    imageUrl: "../../public/placeholder-lamp.png",
  },
  {
    id: "2",
    title: "Hotové Výrobky",
    imageUrl: "../../public/placeholder-griffin.png",
  },
  {
    id: "3",
    title: "Náhradné diely",
    imageUrl: "../../public/placeholder-part.png",
  },
];

function App() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <section className="container mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-[9.5rem] font-bold uppercase"
        >
          Dokonalá <span className="text-primary">tlač</span>
        </motion.h1>

        <FeaturedCarousel />
      </section>
      <BestSellersSection cards={bestSellersCards} />
      <CategoryCarousel categories={categories} />
    </div>
  );
}
