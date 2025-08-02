import { createFileRoute } from "@tanstack/react-router";
import ShowcaseFigure from "@/components/Showcase/figure.tsx";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <section className="flex flex-col xl:flex-row items-center justify-between container mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-[6.5rem] font-bold uppercase leading-tight"
        >
          <span className="text-primary">Precíznosť</span>
          <br /> v obraze
        </motion.h1>

        <ShowcaseFigure />
      </section>
    </div>
  );
}
