import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import BestSellersSection from "@/components/BestSellersSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";

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

const reviews = [
  {
    id: "1",
    imageUrl: "../../public/bestseller-card.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "2",
    imageUrl: "../../public/bestseller-card.png",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    id: "3",
    imageUrl: "../../public/bestseller-card.png",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
  },
  {
    id: "4",
    imageUrl: "../../public/bestseller-card.png",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    rating: 4,
  },
  {
    id: "5",
    imageUrl: "../../public/bestseller-card.png",
    review:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    rating: 3,
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
      <ReviewCarousel reviews={reviews} />
    </div>
  );
}
