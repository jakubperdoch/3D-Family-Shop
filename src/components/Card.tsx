import { Image } from "@heroui/image";
import { Link } from "@tanstack/react-router";
import { Button } from "@heroui/react";

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  isNew?: boolean;
};

export default function Card(card: CardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-[1.75rem] overflow-hidden">
        <Image
          loading="lazy"
          src={card?.image}
          className="rounded-[1.75rem] border-[5px] border-white relative z-[1]"
          alt={card?.title}
        />

        {card?.isNew && (
          <div className="absolute top-0 left-0 z-[2] py-1.5 px-4 bg-primary rounded-tl-[1.75rem] rounded-br-[1.75rem] text-xs font-semibold">
            Nové
          </div>
        )}
      </div>
      <h3 className="text-lg md:text-2xl font-bold">{card?.title}</h3>
      <Link
        to={"/products/$product"}
        className="w-full"
        params={{ product: card?.id }}
      >
        <Button
          aria-label="Zobraziť Produkt"
          className="bg-dark-gray w-full text-white py-2 px-4"
        >
          Zobraziť Produkt -{" "}
          <span className="text-primary">{card?.price} €</span>
        </Button>
      </Link>
    </div>
  );
}
