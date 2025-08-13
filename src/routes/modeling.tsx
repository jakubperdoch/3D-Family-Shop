import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import { FaPencilAlt } from "react-icons/fa";
import SplitImageSection from "@/components/SplitImageSection";
import ShowcaseFigure from "@/components/Showcase";

import type { JSX } from "react";

// Icons
import { AiOutlineMessage } from "react-icons/ai";
import { FaGear, FaSliders } from "react-icons/fa6";
import { LuPackage, LuScanFace } from "react-icons/lu";
import { FaPencilRuler, FaRegFile, FaRegLightbulb } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { LuPrinter } from "react-icons/lu";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import ContactBanner from "@/components/ContactBanner";

export const Route = createFileRoute("/modeling")({
  component: RouteComponent,
});

type SectionItem = {
  icon: JSX.Element;
  description: string;
};

type Section = {
  title: string;
  subtitle: string;
  items: SectionItem[];
  align?: "left" | "right";
  variation?: "default" | "dark";
  renderAside?: () => JSX.Element;
};

const sections: Section[] = [
  {
    title: "Navrhneme pre vás 3D objekt presne podľa požiadaviek",
    subtitle: "Modelovanie na mieru",
    items: [
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaRegLightbulb color="#C1C7CD" size={25} />,
        description:
          "Pracujeme s nápadmi, technickými výkresmi aj predstavivosťou.",
      },
      {
        icon: <AiOutlineMessage color="#C1C7CD" size={25} />,
        description: "Konzultujeme dizajn a funkčnosť pred finálnou verziou.",
      },
      {
        icon: <FaGear color="#C1C7CD" size={25} />,
        description: "Každý model optimalizujeme pre bezchybnú 3D tlač.",
      },
    ],

    align: "right",
    renderAside: () => (
      <ShowcaseFigure
        objectUrl={"/models/gear--model.glb"}
        className="xl:!w-full xl:max-w-md !min-h-[400px]"
        customHeight={4}
        position={{ x: 0, y: -0.05, z: 0 }}
      />
    ),
  },

  {
    title:
      "Pomocou presných 3D skenerov vieme previesť fyzický objekt do digitálnej podoby.",
    subtitle: "Digitalizácia reálneho objektu",
    items: [
      {
        icon: <LuScanFace color="#C1C7CD" size={25} />,
        description: "Zdigitalizujeme reálny objekt do 3D podoby.",
      },
      {
        icon: <FaPencilRuler color="#C1C7CD" size={25} />,
        description: "Zachytávame rozmery, tvary aj jemné detaily.",
      },
      {
        icon: <IoLayers color="#C1C7CD" size={25} />,
        description: "Používame technológiu vhodnú pre rôzne materiály.",
      },
      {
        icon: <FaRegFile color="#C1C7CD" size={25} />,
        description: "Výstup spracujeme pre ďalšie úpravy či tlač.",
      },
    ],

    variation: "dark",
    align: "left",
    renderAside: () => (
      <ShowcaseFigure
        objectUrl={"/models/mask--model.glb"}
        className="xl:!w-full xl:max-w-md !min-h-[400px]"
        customHeight={4}
        position={{ x: 0, y: 0, z: 0 }}
      />
    ),
  },

  {
    title: "Hotový model vytlačíme bez kompromisov.",
    subtitle: "Model → Sken → Tlač",
    items: [
      {
        icon: <LuPrinter color="#C1C7CD" size={25} />,
        description:
          "Model rovno pripravíme na tlač — bez ďalších krokov z vašej strany.",
      },
      {
        icon: <FaSliders color="#C1C7CD" size={25} />,
        description: "Vyberieme vhodné parametre aj materiály.",
      },
      {
        icon: <BsFillGrid1X2Fill color="#C1C7CD" size={25} />,
        description: "Zaistíme správne rozloženie modelu pre efektívnu tlač.",
      },
      {
        icon: <LuPackage color="#C1C7CD" size={25} />,
        description: "Pošleme vám hotový produkt alebo tlačový súbor.",
      },
    ],

    align: "right",
    renderAside: () => (
      <ShowcaseFigure
        objectUrl={"/models/gear-wireframe--model.glb"}
        className="xl:!w-full xl:max-w-md !min-h-[400px]"
        customHeight={4}
        position={{ x: 0, y: -0.05, z: 0 }}
      />
    ),
  },
];

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">Presnosť</span>,
            <br /> ktorú vidno.
          </>
        }
      />

      {sections &&
        sections.map((section, index) => (
          <SplitImageSection
            key={index}
            title={section?.title}
            subtitle={section?.subtitle}
            items={section?.items}
            align={section?.align || "left"}
            variation={section?.variation || "default"}
          >
            {section?.renderAside && section.renderAside()}
          </SplitImageSection>
        ))}

      <ContactBanner
        title="Váš projekt môže začať už dnes."
        subtitle="Zaujalo vás, čo robíme?"
        buttonText="Kontaktujte nás"
        buttonLink={"/"}
        mainText="Vaša vízia – naša výzva"
      />
    </div>
  );
}
