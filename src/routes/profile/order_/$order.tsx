import { createFileRoute } from "@tanstack/react-router";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { itemVariants } from "@/utils/animations.ts";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { getOrderStatus, type OrderStatus } from "@/utils/orders.ts";
import { Tooltip } from "@heroui/react";

export const Route = createFileRoute("/profile/order_/$order")({
  component: RouteComponent,
});

type OrderItem = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  deliveryPrice: number;
  shipping_address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  billing_address: {
    name: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
    email: string;
  };
  items: OrderItem[];
};

const order: Order = {
  id: "ORD-1001",
  date: "2025-09-01",
  status: "delivered",
  deliveryPrice: 10,
  total: 129.97,
  shipping_address: {
    street: "123 Main St",
    zip: "10001",
    city: "New York",
    country: "USA",
  },
  billing_address: {
    name: "Jakub Perďoch",
    street: "123 Main St",
    zip: "10001",
    city: "New York",
    country: "USA",
    phone: "123-456-7890",
    email: "perdochjakub@gmail.com",
  },
  items: [
    {
      id: "ITEM-1",
      image: "https://placehold.co/600x400",
      title: "PLA Filament 1kg (White)",
      price: 24.99,
      quantity: 2,
    },
    {
      id: "ITEM-2",
      image: "https://placehold.co/600x400",
      title: "ABS Filament 1kg (Black)",
      price: 79.99,
      quantity: 1,
    },
    {
      id: "ITEM-3",
      image: "https://placehold.co/600x400",
      title: "ABS Filament 1kg (Black)",
      price: 79.99,
      quantity: 1,
    },

    {
      id: "ITEM-4",
      image: "https://placehold.co/600x400",
      title: "ABS Filament 1kg (Black)",
      price: 79.99,
      quantity: 1,
    },
  ],
};

function RouteComponent() {
  if (!order) return null;

  const { tooltipContent, chipContent, chipVariant } = getOrderStatus(
    order.status,
  );

  const totalItems = order.items.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <RevealOnScroll
      className="container mx-auto mt-10 flex flex-col gap-4"
      variants={itemVariants}
    >
      <div>
        <h1 className="text-2xl mb-2">Objednávka č. {order.id}</h1>
        <p className="">
          Dátum vytvorenia: {new Date(order.date).toLocaleDateString()}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <h2>Stav objednávky: </h2>
        <Tooltip content={tooltipContent} placement="top" className="w-fit">
          <Chip color={chipVariant}>{chipContent}</Chip>
        </Tooltip>
      </div>

      <div className="flex lg:justify-between flex-wrap gap-4 mt-10">
        {!!order.items &&
          order.items.length > 0 &&
          order.items.map((item) => (
            <div key={item.id}>
              <Image
                key={item.id}
                loading="lazy"
                src={item.image}
                alt={item.title}
                classNames={{
                  img: "h-full object-cover",
                }}
                className="sm:w-52 lg:w-[18rem] mb-2 h-auto object-cover"
              />

              <p className="lg:text-lg mb-1">
                {item.quantity}x {item?.title}
              </p>
              <p>{item?.price} EUR</p>
            </div>
          ))}
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-12 mt-10">
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-px">
            <h3 className="text-lg font-semibold mb-4">Fakturačné údaje</h3>

            {order.billing_address &&
              Object.values(order.billing_address).map((item, index) => (
                <span className="text-medium" key={index}>
                  {item}
                </span>
              ))}
          </div>

          <div className="flex flex-col gap-px">
            <h3 className="text-lg font-semibold mb-4">Doručovacia adresa</h3>

            {order.shipping_address &&
              Object.values(order.shipping_address).map((item, index) => (
                <p className="text-medium" key={index}>
                  {item}
                </p>
              ))}
          </div>
        </div>

        <div className="max-w-xs w-full">
          <h3 className="text-lg font-semibold">Prehľad objednávky</h3>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex justify-between">
              <span className="text-medium">Počet položiek</span>
              <span className="text-medium opacity-80">{totalItems}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-medium">Celková cena</span>
              <span className="text-medium opacity-80">
                {order.total.toFixed(2)}€
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-medium">Doprava</span>
              <span className="text-medium opacity-80">
                {order.deliveryPrice}€
              </span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-medium font-semibold">Celkom</span>
              <span className="text-medium font-semibold">
                {order.total.toFixed(2)}€
              </span>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
