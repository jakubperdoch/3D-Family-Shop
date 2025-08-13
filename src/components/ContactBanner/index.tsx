import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";

type ContactBannerProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  mainText: string;
};

export default function ContactBanner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  mainText,
}: ContactBannerProps) {
  return (
    <motion.section className="w-full container mx-auto mb-10 bg-dark-gray flex flex-row justify-between items-center gap-20 p-20 rounded-[3rem]">
      <div className="flex w-full flex-col">
        <span className="mb-0.5 text-primary text-lg font-bold uppercase">
          {subtitle}
        </span>
        <h2 className="text-[2.6rem] font-bold mb-2">{title}</h2>
        <p className="text-lg text-white/80">{mainText}</p>
      </div>

      <Link to={buttonLink}>
        <Button size="lg" color={"primary"} className="text-white">
          {buttonText}
        </Button>
      </Link>
    </motion.section>
  );
}
