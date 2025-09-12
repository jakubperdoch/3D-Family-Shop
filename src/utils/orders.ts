// src/utils/orders/getOrderStatus.ts
import type { ChipProps } from "@heroui/react";

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

type StatuschipVariant = ChipProps["color"];

export interface OrderStatusUI {
  tooltipContent: string;
  chipContent: string;
  chipVariant: StatuschipVariant;
}

const MAP = {
  pending: {
    tooltipContent: "Objednávka bola prijatá, čaká na spracovanie.",
    chipContent: "Čaká na spracovanie",
    chipVariant: "warning",
  },
  processing: {
    tooltipContent: "Pripravujeme vašu objednávku na odoslanie.",
    chipContent: "Vybavuje sa",
    chipVariant: "primary",
  },
  shipped: {
    tooltipContent: "Objednávka bola odoslaná, balík je na ceste.",
    chipContent: "Odoslané",
    chipVariant: "secondary",
  },
  delivered: {
    tooltipContent: "Objednávka bola úspešne doručená.",
    chipContent: "Doručené",
    chipVariant: "success",
  },
  cancelled: {
    tooltipContent: "Objednávka bola zrušená.",
    chipContent: "Zrušené",
    chipVariant: "danger",
  },
  refunded: {
    tooltipContent: "Objednávka bola refundovaná.",
    chipContent: "Refundované",
    chipVariant: "default",
  },
} as const satisfies Record<OrderStatus, OrderStatusUI>;

export const getOrderStatus = (status: string): OrderStatusUI => {
  if ((status as OrderStatus) in MAP) {
    return MAP[status as OrderStatus];
  }

  return {
    tooltipContent: "Neznámy stav objednávky.",
    chipContent: status,
    chipVariant: "default",
  };
};
