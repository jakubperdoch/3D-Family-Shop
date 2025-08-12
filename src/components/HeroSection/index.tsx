import { itemVariants } from "@/utils/animations.ts";
import { motion, useInView } from "framer-motion";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react";

export default function HeroSection() {
  const title = "Tlačíme nápady.\nDoslova.";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const parent = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const char = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Split into lines, then into characters
  const lines = title.split("\n");

  return (
    <motion.section
      variants={itemVariants}
      className="w-full absolute top-0 flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-[url('/background--gradient.png')] bg-cover bg-center opacity-50"></motion.div>
      <motion.div
        ref={containerRef}
        variants={parent}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        aria-label={title}
        className="text-center mb-12"
      >
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className="leading-tight">
            {line.split("").map((ch, i) => (
              <motion.span
                key={i}
                variants={char}
                className="relative text-[6.25rem] font-bold text-center leading-tight mb-11"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
            {lineIdx < lines.length - 1 && <br />}
          </div>
        ))}
      </motion.div>

      <motion.span className="text-xl leading-8 text-center">
        Modelovanie, skenovanie aj zákazková 3D výroba na jednom mieste.
        <br />
        Vaša vízia – náš filament.
      </motion.span>

      <motion.div className="mt-10 flex flex-row gap-8">
        <Button size="lg" color="primary" className="text-white text-medium">
          Objav nové produkty
        </Button>

        <Link
          size="lg"
          isBlock
          className="text-white text-medium flex gap-1 px-6"
          showAnchorIcon
          anchorIcon={<FiArrowUpRight size="1rem" />}
          color="primary"
          href="#"
        >
          Kontaktujte nás
        </Link>
      </motion.div>
    </motion.section>
  );
}
