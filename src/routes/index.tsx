import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center justify-start mt-20 ">
      <motion.h1
        variants={itemVariants}
        className="text-[9.5rem] font-bold uppercase"
      >
        Dokonalá <span className="text-primary">tlač</span>
      </motion.h1>

      <FeaturedCarousel />
    </div>
  );
}
