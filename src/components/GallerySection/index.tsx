import { Image } from "@heroui/image";
import { motion } from "framer-motion";

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
    <div className="gallery-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto py-8">
      {galleryImages.map((image, index) => {
        return (
          <div key={image.id} className={`rounded-xl group shadow-sm`}>
            <motion.div className="">
              <Image
                isZoomed
                src={image.src}
                alt={image.description}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
