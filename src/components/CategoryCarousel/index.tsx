import "swiper/css";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Button } from "@heroui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@heroui/image";
import { Autoplay, Navigation } from "swiper/modules";

type CategoryProps = {
  id: string;
  title: string;
  imageUrl: string;
};

interface CategoryCarouselProps {
  categories: CategoryProps[];
}

export default function CategoryCarousel({
  categories,
}: CategoryCarouselProps) {
  return (
    <motion.section
      variants={itemVariants}
      className="flex flex-col gap-16 w-full bg-dark-gray"
    >
      <div className="flex justify-between container mx-auto pt-20">
        <h2 className="text-white font-bold text-[4.6rem] leading-16">
          Kategórie
        </h2>

        <div className="flex gap-4">
          <Button
            disabled={categories.length <= 1}
            isIconOnly
            className="bg-gray swiper-button-prev"
          >
            <FaChevronLeft className="text-dark-gray" />
          </Button>
          <Button
            disabled={categories.length <= 1}
            isIconOnly
            className="bg-gray swiper-button-next"
          >
            <FaChevronRight className="text-dark-gray" />
          </Button>
        </div>
      </div>
      <motion.div variants={itemVariants} className="overflow-hidden">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={2}
          className="!ms-14 rounded-tl-[4rem]"
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={category.id}
              className={`!flex !flex-col !justify-between !h-auto px-16 pt-20 pb-6 ${index % 2 === 0 ? "bg-gray-light" : "bg-white"}`}
            >
              <Image
                className="w-full h-full  max-w-2/3 object-cover mx-auto"
                removeWrapper
                src={category?.imageUrl}
              />

              <div className="flex justify-between items-end">
                <h3 className="text-dark-gray font-semibold text-4xl max-w-[13rem]">
                  {category?.title}
                </h3>
                <Button className="bg-dark-gray w-12 h-12" isIconOnly={true}>
                  <FiArrowUpRight size="1.5rem" />
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
