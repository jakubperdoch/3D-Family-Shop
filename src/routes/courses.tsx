import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import PricingCardsSection from "@/components/PricingCardsSection";
import FaqSection from "@/components/FaqSection";

import type { JSX } from "react";
import ContactBanner from "@/components/ContactBanner";

export const Route = createFileRoute("/courses")({
  component: RouteComponent,
});

type Item = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: JSX.Element;
  subtitle: string;
  items: Item[];
};

const section: FaqSectionProps = {
  title: (
    <>
      Máte otázky?
      <br />
      My máme odpovede.
    </>
  ),
  subtitle: "Často kladené otázky",
  items: [
    {
      question: "Je školenie vhodné aj pre úplných začiatočníkov?",
      answer:
        "Áno, školenie je navrhnuté tak, aby bolo zrozumiteľné aj pre ľudí bez predchádzajúcich skúseností s 3D tlačou. Začíname úplnými základmi a postupne prechádzame k praktickým ukážkam.",
    },
    {
      question: "Potrebujem vlastnú 3D tlačiareň?",
      answer:
        "Nie je to podmienkou. Na školení používame naše vlastné zariadenia, na ktorých si všetko vyskúšate. V prípade, že už tlačiareň máte, radi vám poradíme s jej nastavením.",
    },
    {
      question: "Akú formu má podpora po školení?",
      answer:
        "Podpora závisí od zvoleného typu školenia. Pri variante Full Boost získate prístup k ročnej e-mailovej a telefonickej podpore, počas ktorej vám pomôžeme s nastaveniami, tlačou aj problémami v praxi.",
    },
  ],
};

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">3D školenie</span>, ktoré vás posunie
          </>
        }
      ></Banner>

      <PricingCardsSection />
      <FaqSection {...section} />

      <ContactBanner
        title="Radi vám pomôžeme."
        subtitle="Ešte máte otázky ?"
        buttonText="Kontaktujte nás"
        buttonLink={"/contact"}
        mainText="Ozvite sa nám a spoločne nájdeme ideálne školenie pre vás."
      />
    </div>
  );
}
