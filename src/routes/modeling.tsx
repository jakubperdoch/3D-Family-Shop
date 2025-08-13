import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import { FaPencilAlt } from "react-icons/fa";
import SplitImageSection from "@/components/SplitImageSection";
import ShowcaseFigure from "@/components/Showcase";

import type { JSX } from "react";

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
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
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
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
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
    title:
      "Pomocou presných 3D skenerov vieme previesť fyzický objekt do digitálnej podoby.",
    subtitle: "Digitalizácia reálneho objektu",
    items: [
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
      },
      {
        icon: <FaPencilAlt color="#C1C7CD" size={25} />,
        description: "Navrhneme 3D model podľa vášho zadania či náčrtu.",
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
    </div>
  );
}
