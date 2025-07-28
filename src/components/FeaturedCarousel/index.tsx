import { Image } from "@heroui/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";
import { itemVariants } from "@/utils/animations.ts";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Link } from "@tanstack/react-router";

const featuredProduct: FeaturedProductProps = {
  id: "1",
  images: [
    "../../public/placeholder.png",
    "../../public/placeholder--2.png",
    "../../public/placeholder--3.jpg",
  ],
  title: "1972 Datsun 240k GT",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit, dui quis.",
  price: 199.99,
};

type FeaturedProductProps = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
};

export default function FeaturedCarousel() {
  const [userClicked, setUserClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setUserClicked(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (userClicked) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProduct?.images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [userClicked]);

  return (
    <RevealOnScroll
      variants={itemVariants}
      className="flex w-full relative container mx-auto"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="object-cover max-h-[40rem] relative z-[1] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            removeWrapper
            src={featuredProduct.images[activeIndex]}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 z-[2] h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_31.12%,rgba(0,0,0,0.5)_66.06%)] rounded-b-xl"></div>

      <div className="absolute z-[2] left-8 bottom-8 flex flex-col max-w-3xl">
        <Link
          to={"/products/$product"}
          params={{ product: featuredProduct.id }}
        >
          <h4 className="text-7xl font-bold hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">
            {featuredProduct.title}
          </h4>
        </Link>
        <span className="text-2xl max-w-lg ">
          {featuredProduct.description}
        </span>

        <Button
          className="w-fit mt-6 px-8 py-2 text-white text-sm font-medium"
          color={"primary"}
        >
          Pridať do Košíka - {featuredProduct.price.toFixed(2)} €
        </Button>
      </div>

      <div className="absolute right-8 bottom-8 flex flex-col gap-2">
        {featuredProduct.images.map(
          (image, index) =>
            index !== activeIndex && (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-40 h-40 flex object-cover cursor-pointer`}
              >
                <Image
                  className="object-cover border-3 border-white"
                  removeWrapper={true}
                  src={image}
                />
              </button>
            ),
        )}
      </div>
    </RevealOnScroll>
  );
}
