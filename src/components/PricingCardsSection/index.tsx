import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import type { JSX } from "react";
import PricingCard from "@/components/PricingCard";
import { IoDiamond } from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";

type PricingCardProps = {
  title: string;
  icon: JSX.Element;
  price: string;
  description: string;
  features: string[];
  type?: "standard" | "premium";
};

const pricingCards: PricingCardProps[] = [
  {
    title: "Quick Jump",
    icon: <MdRocketLaunch className="w-8 h-8 text-primary" />,
    price: "199€",
    description:
      "Pre tých, ktorí chcú získať základy rýchlo a bez zbytočného čakania. Kompaktné, intenzívne a nabité obsahom.",
    features: [
      "1-dňové školenie s lektorom",
      "Praktické ukážky a úlohy",
      "Základy obsluhy 3D tlačiarne",
      "Tipy a triky pre úspešnú tlač",
    ],
    type: "standard",
  },
  {
    title: "Full Boost",
    icon: <IoDiamond className="w-8 h-8 text-primary" />,
    price: "299€",
    description:
      "Získaj istotu v praxi a možnosť kedykoľvek sa vrátiť pre radu. Ideálne pre tých, ktorí chcú napredovať bez stresu.",
    features: [
      "Intenzívne 1-dňové školenie",
      "Reálne príklady z praxe",
      "Riešenie problémov s tlačou",
      "Ročná podpora po školení",
    ],
    type: "premium",
  },
];

export default function PricingCardsSection() {
  return (
    <motion.section
      variants={itemVariants}
      className="container mx-auto flex flex-col gap-12"
    >
      <div className="text-center">
        <p className="text-primary uppercase font-bold text-xl">Ceny</p>
        <h2 className="mb-6 text-[3.3rem] leading-tight font-bold">
          Praktické školenia, ktoré vás pripravia na vlastnú tvorbu.
        </h2>
        <p className="text-lg">
          Naše školenia sú navrhnuté pre začiatočníkov aj pokročilých. V
          priebehu jedného dňa vás naučíme všetko potrebné – od prípravy modelu
          až po jeho finálnu tlač. Navyše ponúkame možnosť ročnej podpory, vďaka
          ktorej sa na nás môžete obrátiť vždy, keď to budete potrebovať.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] justify-center gap-10">
        {pricingCards &&
          pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              icon={card.icon}
              price={card.price}
              description={card.description}
              features={card.features}
              type={card.type}
            />
          ))}
      </div>

      <span className="text-center text-white/60 text-lg">
        Nevieš, ktorý balík je pre teba? Ozvi sa nám a pomôžeme ti vybrať
        najlepšiu cestu.
      </span>
    </motion.section>
  );
}
