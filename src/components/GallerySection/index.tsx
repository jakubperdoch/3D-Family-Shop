import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";

type GalleryImage = {
  id: number;
  src: string;
  description?: string;
};

const galleryImages = new Array<GalleryImage>(20)
  .fill({ id: 0, src: "", description: "" })
  .map((_, index) => ({
    id: index + 1,
    src: `/placeholder.png`,
    description: `Image ${index + 1}`,
  }));

export default function GallerySection() {
  return (
    <div className="gallery-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-8">
      {galleryImages.map((image) => {
        return (
          <motion.div
            key={image.id}
            className={`relative rounded-xl group shadow-sm overflow-hidden`}
            variants={itemVariants}
          >
            <Image
              src={image.src}
              alt={image.description}
              className="w-full h-auto object-cover z-[2]"
            />

            {image.description && (
              <div className="absolute top-0 z-[3] flex justify-center items-center w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
                <span className="font-semibold lg:text-lg">
                  {image?.description}
                </span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
