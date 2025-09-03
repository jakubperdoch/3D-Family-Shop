// src/constants/selectOptions.ts
export type SelectOption = {
  value: string;
  label: string;
};

/**
 * Materiál – základná voľba pre zákazníkov
 */
export const materialOptions: SelectOption[] = [
  { value: "optional", label: "Nechám si poradiť" },
  { value: "pla", label: "PLA – univerzálny a cenovo dostupný" },
  { value: "petg", label: "PETG – vyššia odolnosť voči teplu" },
  { value: "abs", label: "ABS – pevný a odolný materiál" },
  { value: "resin", label: "Resin – detailné výtlačky" },
  { value: "nylon", label: "Nylon – pružný a odolný materiál" },
];

export const colorOptions: SelectOption[] = [
  { value: "white", label: "Biela" },
  { value: "black", label: "Čierna" },
  { value: "custom", label: "Iná (napíšte do poznámky)" },
];

export const strengthOptions: SelectOption[] = [
  { value: "decoration", label: "Dekorácia – len na vystavenie" },
  { value: "light-use", label: "Ľahké použitie – pomôcky, stojany" },
  { value: "daily-use", label: "Bežné používanie – štandardná pevnosť" },
  { value: "mechanical", label: "Namáhané časti – vyššia pevnosť" },
  {
    value: "extreme",
    label: "Extra odolné – mechanické súčiastky, ozubené kolieska",
  },
];

export const qualityOptions: SelectOption[] = [
  { value: "fast", label: "Rýchla tlač – nižšia kvalita, vhodné na prototypy" },
  { value: "standard", label: "Štandardná kvalita – dobrý pomer cena/výkon" },
  { value: "high", label: "Vysoká kvalita – jemné detaily, hladší povrch" },
  { value: "premium", label: "Prémiová kvalita – najlepší povrch a presnosť" },
];

export const infillOptions: SelectOption[] = [
  { value: "low", label: "Ľahké – úspora materiálu (10–20 % výplň)" },
  { value: "medium", label: "Vyvážené – štandardná pevnosť (30–50 %)" },
  { value: "high", label: "Pevné – vysoká pevnosť (70–100 %)" },
];
