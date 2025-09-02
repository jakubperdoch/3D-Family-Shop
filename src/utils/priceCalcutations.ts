import {
  materialIndex,
  strengthIndex,
  qualityIndex,
  usageIndex,
  infillIndex,
} from "@/constants/priceIndex";

type CalcParams = {
  material: string;
  strength: string;
  quality: string;
  infill: string;
  count: number;
};

export function calculatePrice(
  volume: number, // v mm³
  params: CalcParams,
): number {
  const basePricePerCm3 = 0.15; // 0.15 € / cm³
  const volumeCm3 = volume / 1000; // prevod mm³ → cm³

  const base = volumeCm3 * basePricePerCm3;

  const material = materialIndex[params.material] ?? 1;
  const strength = strengthIndex[params.strength] ?? 1;
  const quality = qualityIndex[params.quality] ?? 1;
  const infill = infillIndex[params.infill] ?? 1;
  const count = params.count;

  const finalPrice = base * material * strength * quality * infill * count;

  const rounded = Math.round(finalPrice * 2) / 2;
  return Math.max(15, rounded);
}
