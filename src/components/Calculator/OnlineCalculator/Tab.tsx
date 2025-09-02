import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Button } from "@heroui/react";
import OnlineCalculatorForm from "@/components/Calculator/OnlineCalculator/Form.tsx";

type CalculatorTabProps = {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
};

export default function OnlineCalculatorTab({
  setSelectedTab,
}: CalculatorTabProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 gap-y-5 gap-x-7"
    >
      <div className="flex flex-col gap-y-5">
        <div className="bg-dark-gray h-fit rounded-t-3xl row-start-1 max-lg:col-span-2 px-8 py-7 flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            Nemáte model, ale máte nápad?
          </h3>
          <p className="text-lg text-white/60">
            Nevadí – nemusíte byť dizajnér, aby ste mohli začať.
          </p>
          <p>
            Stačí náčrt, popis alebo len predstava. Náš tím vám pomôže celý
            model navrhnúť na mieru podľa vašich potrieb.
          </p>

          <ul className="list-disc list-outside pl-3.5 flex flex-col gap-px">
            <li>Opíšte svoj nápad</li>
            <li>Priložte obrázok, skicu alebo referenciu</li>
            <li>Vyberte materiál, farbu a veľkosť</li>
            <li>My vám pripravíme nezáväznú ponuku aj s orientačnou cenou</li>
          </ul>

          <Button
            color="primary"
            onPress={() => {
              setSelectedTab("individual-offer");
            }}
            className="w-fit text-medium text-white mt-4 px-6 h-12"
          >
            Zadať požiadavku
          </Button>
        </div>

        <div className="bg-dark-gray h-fit rounded-b-3xl col-start-1 row-start-2 max-lg:col-span-2 px-8 py-7 flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Máte 3D model? </h3>
          <p className="text-lg text-white/60">
            Online kalkulačka jednoduchý a rýchly výpočet ceny tlače
          </p>
          <p>
            Nahrajte svoj 3D model, vyplňte parametre a okamžite zistíte
            orientačnú cenu. Ak vám cena vyhovuje, môžete rovno objednať.
          </p>

          <div>
            <h4 className="text-2xl font-medium mb-2">Ako to funguje?</h4>
            <ul className="list-disc list-outside pl-3.5 flex flex-col gap-px">
              <li>
                Nahrajte svoj 3D model vo formáte STL
                <br />
                (Max. veľkosť 200 MB)
              </li>
              <li>Vyberte požadované parametre (materiál, farba, výplň...).</li>
              <li>Okamžite získate odhad ceny a času výroby.</li>
              <li>V prípade záujmu odošlite objednávku jedným klikom.</li>
              <li>
                My váš model skontrolujeme, potvrdíme cenu a začneme tlačiť.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <OnlineCalculatorForm />
    </motion.div>
  );
}
