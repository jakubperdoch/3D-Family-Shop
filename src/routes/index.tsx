import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1
        variants={itemVariants}
        className="text-[10rem] font-bold uppercase"
      >
        Dokonalá <span className="text-primary">tlač</span>
      </motion.h1>
    </div>
  );
}
