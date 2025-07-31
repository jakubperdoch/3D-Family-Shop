import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@heroui/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { BreadcrumbItem, Breadcrumbs, Button } from "@heroui/react";
import RelatedProductsSection from "@/components/RelatedProductsSection";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/types";
import { addToCart } from "@/store/slices/cartSlice.ts";

export const Route = createFileRoute("/products_/$product")({
  component: ProductPage,
});

const product: ProductPageProps = {
  id: "1",
  name: "1972 Datsun 240k GT",
  description:
    "Kultový model zlatých 70. rokov, Datsun 240k GT, predstavuje spojenie klasického dizajnu, výnimočného spracovania a nezameniteľného športového ducha. Vhodný ako štýlový zberateľský predmet alebo originálny darček pre milovníkov áut.",
  price: 34.9,
  images: [
    "../../public/placeholder.png",
    "../../public/placeholder--2.png",
    "../../public/placeholder--2.png",
    "../../public/placeholder--2.png",
  ],
  category: "Dekorácie",
  material: "Akrylové sklo",
  dimensions: "24 cm × 18 cm × 5 cm",
  weight: "420 g",
  isNew: true,
};

type ProductPageProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  material: string;
  dimensions: string;
  weight: string;
  isNew: boolean;
};

function ProductPage() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="container flex flex-col gap-32 mx-auto mt-12 mb-10">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <a href="/">Domov</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/products">Produkty</a>
        </BreadcrumbItem>
        <BreadcrumbItem isLast={true}>{product.name}</BreadcrumbItem>
      </Breadcrumbs>

      <section className="grid grid-cols-[1fr_auto] gap-6">
        <PhotoProvider>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {product.images.map((image, index) => (
              <PhotoView src={image} key={index}>
                <Image
                  className="w-full h-full rounded-[1.75rem] object-cover cursor-pointer hover:scale-95"
                  removeWrapper={true}
                  src={image}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className="flex flex-col gap-4">
          {product.isNew && (
            <div className="bg-primary w-fit px-4 py-3 rounded-xl font-semibold text-sm">
              Nové
            </div>
          )}
          <h2 className="text-4xl font-semibold">{product?.name}</h2>
          <span className="text-primary text-2xl font-semibold">
            {product?.price?.toFixed(2)}€
          </span>

          <Button
            onPress={() => {
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.name,
                  category: product.category,
                  material: product.material,
                  price: product.price,
                  image: product.images[0],
                  quantity: 1,
                }),
              );
            }}
            className="my-4 !text-sm text-white uppercase font-medium"
            size={"lg"}
            color="primary"
          >
            Pridať do Košíka
          </Button>

          <div className="flex flex-col gap-2 max-w-md">
            <h4 className="text-base font-semibold uppercase">O produkte</h4>
            <span className="text-base text-white opacity-80 mb-4">
              {product?.description}
            </span>

            <h4 className="text-base font-semibold uppercase">Detaily</h4>
            <div className="flex flex-col gap-1">
              <span className="text-base text-white opacity-80">
                Kategória: {product?.category}
              </span>
              <span className="text-base text-white opacity-80">
                Materiál: {product?.material}
              </span>
              <span className="text-base text-white opacity-80">
                Rozmery: {product?.dimensions}
              </span>
              <span className="text-base text-white opacity-80">
                Hmotnosť: {product?.weight}
              </span>
            </div>
          </div>
        </div>
      </section>

      <RelatedProductsSection />
    </div>
  );
}
