import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import Card from "@/components/Card.tsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const bestSellersCards: CardProps[] = [
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

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
};

export default function BestSellersSection() {
  return (
    <RevealOnScroll
      variants={itemVariants}
      className="flex flex-col gap-10 container mx-auto"
    >
      <h2 className="font-bold text-4xl md:text-5xl lg:text-[4.6rem] lg:leading-20">
        Čerstvé dizajny,
        <br /> okamžite k objednaniu.
      </h2>

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
          {bestSellersCards &&
            bestSellersCards.length > 0 &&
            bestSellersCards.map((card) => (
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
