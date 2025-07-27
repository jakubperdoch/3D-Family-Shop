import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Image } from "@heroui/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

type ReviewProps = {
  id: string;
  imageUrl: string;
  review: string;
  rating: number;
};

interface ReviewCarouselProps {
  reviews: ReviewProps[];
}

const quality: { [key: number]: string } = {
  1: "Veľmi nespokojný",
  2: "Nespokojný",
  3: "Spokojný",
  4: "Veľmi spokojný",
  5: "Nad očakávania",
};

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <motion.section
      variants={itemVariants}
      className="flex flex-col gap-8 container mb-10 mx-auto"
    >
      <h2 className="font-bold text-[4.6rem] leading-20">Recenzie</h2>

      <motion.div variants={itemVariants} className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={3}
        >
          {reviews.map((review) => {
            const isExpanded = expandedId === review.id;

            return (
              <SwiperSlide key={review.id} className="!h-auto">
                <motion.div
                  layout
                  transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                  className="bg-white rounded-t-xl text-dark-gray p-8 flex flex-col "
                >
                  <h3 className="font-semibold text-2xl">
                    {quality[review.rating]}
                  </h3>

                  <motion.div layout className="mt-4">
                    <motion.div
                      key={isExpanded ? "expanded" : "collapsed"}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.7 }}
                      layout
                    >
                      <p
                        className={`opacity-80 ${isExpanded ? "" : "line-clamp-2"}`}
                      >
                        {review.review}
                      </p>
                    </motion.div>

                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : review.id)
                      }
                      className="text-sm text-primary mt-2 underline"
                    >
                      {isExpanded ? "Zobraziť menej" : "Zobraziť viac"}
                    </button>
                  </motion.div>
                </motion.div>

                <motion.div layout>
                  <Image
                    removeWrapper
                    className="rounded-t-none max-h-80 w-full object-cover"
                    src={review.imageUrl}
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
