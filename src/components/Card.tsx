import { Image } from "@heroui/image";
import { Link } from "@tanstack/react-router";
import { Button } from "@heroui/react";

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
};

export default function Card(card: CardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={card?.image}
        className="border-5 border-white rounded-[1.75rem]"
        removeWrapper={true}
        alt={card?.title}
      />
      <h3 className="text-2xl font-bold">{card?.title}</h3>
      <Link
        to={"/products/$product"}
        className="w-full"
        params={{ product: card?.id }}
      >
        <Button className="bg-dark-gray w-full text-white py-2 px-4">
          Zobraziť Produkt -{" "}
          <span className="text-primary">{card?.price} €</span>
        </Button>
      </Link>
    </div>
  );
}
