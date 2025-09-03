import { createFileRoute, Link } from "@tanstack/react-router";
import { Pagination } from "@heroui/react";
import Card from "@/components/Card.tsx";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";

export const Route = createFileRoute("/collections_/$collection")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      collection: params.collection,
    };
  },
});

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  isNew?: boolean;
};

const collections = {
  name: "Modely",
  key: "models",
  items: [
    {
      id: 1,
      name: "3D fotolampy",
      key: "3d-lamps",
    },
    {
      id: 2,
      name: "Dekorácie a zápichy na torty",
      key: "cake-toppers",
    },
    {
      id: 3,
      name: "Zákazková 3D tlač",
      key: "custom-3d-printing",
    },
  ],
};

const products: CardProps[] = [
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 19.99,
    isNew: true,
  },
  {
    id: "2",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 24.99,
    isNew: true,
  },
  {
    id: "3",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 29.99,
  },
  {
    id: "4",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 34.99,
  },
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 19.99,
    isNew: true,
  },
  {
    id: "2",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 24.99,
    isNew: true,
  },
  {
    id: "3",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 29.99,
  },
  {
    id: "4",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 34.99,
  },
  {
    id: "1",
    image: "../../public/bestseller-card.png",
    title: "3D Fotolampa - Fialová",
    price: 19.99,
    isNew: true,
  },
];

function RouteComponent() {
  const { collection } = Route.useLoaderData();

  const currentCollection = collections.items.find(
    (item) => item.key === collection,
  );

  if (!currentCollection) {
    return <div>Collection not found</div>;
  }
  return (
    <section className="container mx-auto mt-20 grid lg:grid-cols-[auto_1fr] gap-20">
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-10 min-h-64 h-fit justify-between"
      >
        <div className="flex flex-col gap-1.5">
          <h1 className="text-4xl font-bold w-xs">{currentCollection?.name}</h1>
          <p className="text-lg text-white/80">122 položiek</p>
        </div>
        <div key={collections.name} className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{collections.name}</h2>
          <div className="flex flex-col gap-1 pl-5">
            {collections.items.map((item) => (
              <Link
                className="[&.active]:text-primary transition-colors duration-300 ease-in-out"
                to={"/collections/$collection"}
                params={{ collection: item.key }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-10 justify-center items-center">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products &&
            products.length > 0 &&
            products.map((card) => (
              <Card
                key={card?.id}
                id={card?.id}
                image={card?.image}
                title={card?.title}
                price={card?.price}
                isNew={card?.isNew}
              />
            ))}
        </motion.div>
        <Pagination color="primary" initialPage={1} total={10} />
      </div>
    </section>
  );
}
