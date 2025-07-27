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
      <BestSellersSection />
      <CategoryCarousel />
      <ReviewCarousel />
    </div>
  );
}
