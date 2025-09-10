import { Image } from "@heroui/image";
import { Link } from "@tanstack/react-router";

type OrderItem = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type OrderCardProps = {
  id: string;
  date: string;
  status: string;
  total: number;
  deliveryPrice: number;
  items: OrderItem[];
};

export default function OrdersCard({
  id,
  date,
  status,
  total,
  deliveryPrice,
  items,
}: OrderCardProps) {
  if (!items) return null;

  const totalItems = items.reduce((acc, it) => acc + it.quantity, 0);
  const itemsToShow = items.slice(0, 2);
  const remainingCount = items.length > 2 ? items.length - 2 : 0;

  return (
    <Link
      to={"/profile/order/$order"}
      params={{ order: id }}
      id={id}
      className="bg-dark-gray w-full rounded-2xl p-6 flex max-lg:flex-col justify-between gap-8"
    >
      <div className="flex flex-col gap-2">
        <span>{status}</span>
        <span className="text-primary font-bold capitalize">
          {new Date(date).toLocaleDateString("sk-SK", {
            dateStyle: "full",
          })}
        </span>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold mt-4 mb-2">Súhrn</h2>
            <span>Počet produktov: {totalItems}</span>
            <span>Poštovné {deliveryPrice && deliveryPrice} €</span>
            <span>Spolu {total && total} €</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {itemsToShow.map((item) => (
          <Image
            key={item.id}
            loading="lazy"
            src={item.image}
            alt={item.title}
            classNames={{
              img: "h-full object-cover",
            }}
            className="w-48 lg:w-[15rem] h-auto object-cover"
          />
        ))}
        {remainingCount > 0 && (
          <div className="w-48 max-md:h-20 rounded-xl border border-white/10 grid place-items-center text-sm text-gray-300">
            +{remainingCount}
          </div>
        )}
      </div>
    </Link>
  );
}
