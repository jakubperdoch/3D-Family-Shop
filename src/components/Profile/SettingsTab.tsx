import { itemVariants } from "@/utils/animations.ts";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Accordion, AccordionItem } from "@heroui/react";

export default function SettingsTab() {
  return (
    <section className="min-h-[calc(100vh-20rem)]">
      <motion.div
        variants={itemVariants}
        className="flex justify-between items-center relative p-14 rounded-2xl overflow-hidden"
      >
        <motion.div className="absolute inset-0 bg-[url('/background--gradient.webp')] bg-cover bg-center opacity-50"></motion.div>

        <div className="relative z-[2] flex gap-4 items-center">
          <Image
            loading="lazy"
            alt="avatar"
            src={
              "https://ui-avatars.com/api/?name=Elon+Musk?rounded=true&background=232321&color=ffff&format=svg"
            }
          />
          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-3xl font-bold text-white">John Doe</h1>
            <p className="text-white/80">johndoe@gmail.com</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10">
        <Accordion className="px-0 mt-4" variant="splitted">
          <AccordionItem
            key="address"
            className="bg-dark-gray rounded-2xl"
            aria-label="address"
            title="Adresa"
            subtitle="Nastavenie adresy"
          >
            Ahoj
          </AccordionItem>

          <AccordionItem
            key="email"
            className="bg-dark-gray rounded-2xl"
            aria-label="email"
            title="Email"
            subtitle="Zmeniť e-mail"
          ></AccordionItem>

          <AccordionItem
            key="phone"
            className="bg-dark-gray rounded-2xl"
            aria-label="phone"
            title="Telefónne číslo"
            subtitle="Zmeniť telefónne číslo"
          ></AccordionItem>

          <AccordionItem
            key="password"
            className="bg-dark-gray rounded-2xl"
            aria-label="password"
            title="Heslo"
            subtitle="Zmeniť heslo"
          ></AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
}
