import { itemVariants } from "@/utils/animations.ts";
import { motion } from "framer-motion";
import RequestCalculatorForm from "@/components/Calculator/RequestCalculator/Form.tsx";

export default function RequestCalculatorTab() {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 gap-y-5 gap-x-7"
    >
      <div className="flex flex-col gap-y-5 max-lg:col-span-2">
        <div className="bg-dark-gray rounded-t-3xl  px-8 py-7 flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            Kedy sa hodí individuálna ponuka?
          </h3>
          <p className="text-lg text-white/60">
            Ak nemáte 3D model alebo potrebujete špecifické riešenie.
          </p>
          <p>
            Stačí náčrt, popis alebo len predstava. Náš tím vám pomôže celý
            model navrhnúť na mieru podľa vašich potrieb.
          </p>

          <ul className="list-disc list-outside pl-3.5 flex flex-col gap-px">
            <li>Výroba prototypu alebo náhradného dielu</li>
            <li>Komplexný model s viacerými časťami</li>
            <li>Dizajn produktu na mieru</li>
            <li>Sériová výroba pre firmy</li>
            <li>Služby 3D modelovania a technickej podpory</li>
          </ul>
        </div>

        <div className="bg-dark-gray rounded-b-3xl px-8 py-7 flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            Ako prebieha zadanie požiadavky?
          </h3>
          <p className="text-lg text-white/60">
            Jednoducho nám opíšte, čo potrebujete. O všetko ostatné sa postaráme
            my.
          </p>
          <p>
            Nahrajte skicu, obrázok alebo aj 3D model a vyplňte základné
            informácie. My vám pripravíme nezáväznú ponuku s orientačnou cenou a
            pomôžeme s návrhom na mieru.
          </p>

          <ul className="list-disc list-outside pl-3.5 flex flex-col gap-px">
            <li>Opíšte, čo chcete vyrobiť alebo čo vám chýba</li>
            <li>Priložte obrázok, skicu alebo referenciu (ak máte)</li>
            <li>
              Vyplňte požadované vlastnosti (rozmery, materiál, farebnosť...)
            </li>
            <li>Odošlite formulár</li>
            <li>Do 1–2 pracovných dní vám pošleme nezáväznú ponuku</li>
          </ul>
        </div>
      </div>

      <RequestCalculatorForm />
    </motion.div>
  );
}
