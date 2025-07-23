import { Image } from "@heroui/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";
import { itemVariants } from "@/utils/animations.ts";

export default function FeaturedCarousel() {
  const [images] = useState<string[]>([
    "../../public/placeholder.png",
    "../../public/placeholder--2.png",
    "../../public/placeholder--3.jpg",
  ]);
  const [userClicked, setUserClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setUserClicked(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (userClicked) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [userClicked]);

  return (
    <motion.div variants={itemVariants} className="flex w-full relative">
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
            src={images[activeIndex]}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 z-[2] h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_31.12%,rgba(0,0,0,0.5)_66.06%)] rounded-b-xl"></div>

      <div className="absolute z-[2] left-8 bottom-8 flex flex-col max-w-3xl">
        <h4 className="text-7xl font-bold">1972 Datsun 240k GT</h4>
        <span className="text-2xl max-w-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          suscipit, dui quis
        </span>

        <Button
          className="w-fit mt-6 px-8 py-2 text-white text-sm font-medium"
          color={"primary"}
        >
          Pridať do Košíka
        </Button>
      </div>

      <div className="absolute right-8 bottom-8 flex flex-col gap-2">
        {images.map(
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
    </motion.div>
  );
}
