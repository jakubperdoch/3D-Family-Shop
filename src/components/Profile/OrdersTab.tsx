import OrdersCard from "@/components/Profile/Orders/Card.tsx";
import { motion } from "framer-motion";

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
  status: string;
  total: number;
  deliveryPrice: number;
  items: OrderItem[];
};

const orders: Order[] = [
  {
    id: "ORD-1001",
    date: "2025-09-01",
    status: "Shipped",
    deliveryPrice: 10,
    total: 129.97,
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
    ],
  },
  {
    id: "ORD-1002",
    date: "2025-08-28",
    status: "Processing",
    deliveryPrice: 10,
    total: 59.98,
    items: [
      {
        id: "ITEM-3",
        image: "https://placehold.co/600x400",
        title: "Nozzle Kit (0.2–0.6mm)",
        price: 29.99,
        quantity: 2,
      },
    ],
  },
  {
    id: "ORD-1003",
    date: "2025-08-20",
    status: "Delivered",
    deliveryPrice: 10,
    total: 214.5,
    items: [
      {
        id: "ITEM-4",
        image: "https://placehold.co/600x400",
        title: "3D Printer Stand",
        price: 199.5,
        quantity: 1,
      },
      {
        id: "ITEM-5",
        image: "https://placehold.co/600x400",
        title: "PETG Filament 1kg (Blue)",
        price: 15,
        quantity: 1,
      },
    ],
  },
];

export default function OrdersTab() {
  return (
    <section className="min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col gap-8 items-start justify-start">
        {orders &&
          orders.length > 0 &&
          orders.map((order, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={order.id}
              className="w-full"
            >
              <OrdersCard {...order} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
