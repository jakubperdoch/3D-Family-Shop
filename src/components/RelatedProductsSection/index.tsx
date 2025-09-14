import type { CardProps } from "@/types";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { containerVariants, itemVariants } from "@/utils/animations.ts";
import { motion } from "framer-motion";
import Card from "@/components/Card.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const relatedProducts: CardProps[] = [
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 19.99,
  },
  {
    id: "2",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 24.99,
  },
  {
    id: "3",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 29.99,
  },
  {
    id: "4",
    image: "../../public/bestseller-card.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 34.99,
  },
];

export default function RelatedProductsSection() {
  return (
    <RevealOnScroll
      className="flex flex-col gap-10"
      variants={containerVariants}
    >
      <h3 className="text-4xl md:text-5xl font-bold">Mohlo by sa vám páčiť</h3>

      <motion.div variants={itemVariants}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          loop={true}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: { slidesPerView: 4 },
          }}
        >
          {relatedProducts &&
            relatedProducts.length > 0 &&
            relatedProducts.map((card) => (
              <SwiperSlide>
                <Card
                  key={card?.id}
                  id={card?.id}
                  image={card?.image}
                  title={card?.title}
                  price={card?.price}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </RevealOnScroll>
  );
}
