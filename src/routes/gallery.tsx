import { createFileRoute } from "@tanstack/react-router";
import ShowcaseFigure from "@/components/Showcase/figure.tsx";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import GallerySection from "@/components/GallerySection";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <motion.section
        variants={itemVariants}
        className="flex flex-col xl:flex-row items-center justify-between container mx-auto bg-dark-gray py-16 px-14 rounded-2xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[6.5rem] font-bold uppercase leading-tight max-lg:text-center"
        >
          <span className="text-primary">Precíznosť</span>
          <br /> v obraze
        </motion.h1>

        <ShowcaseFigure />
      </motion.section>

      <GallerySection />
    </div>
  );
}
