import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

type SearchItem = {
  id: number;
  name: string;
  avatar: string;
};

export const items: SearchItem[] = [
  {
    id: 1,
    name: "3D fotolampa",
    avatar:
      "https://image.made-in-china.com/2f0j00CrDGyVMBZIpv/3D-Acrylic-LED-Night-Light-3D-Acrylic-Home-Decor-Lamp.webp",
  },
  {
    id: 2,
    name: "Deadpool maska",
    avatar:
      "https://yoshstudios.com/wp-content/uploads/2024/11/Deadpool3-Movie-01-Textured_Yosh-Studios-1024x1024.jpg",
  },
];

export default function NavigationSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <motion.div
        className="flex items-center overflow-hidden"
        initial={{ width: "40px" }}
        animate={{ width: isOpen ? "100%" : "40px" }}
        transition={{ duration: 0.3 }}
      >
        <Autocomplete
          ref={inputRef}
          type={"text"}
          // @ts-ignore
          variant={""}
          defaultItems={items}
          placeholder={isOpen ? "Čo si prajete vytlačiť?" : ""}
          onFocus={() => setIsOpen(true)}
          onBlur={(e) => {
            if (!e.target.value) setIsOpen(false);
          }}
          startContent={
            <div
              onClick={() => {
                setIsOpen(true);
                inputRef.current?.focus();
              }}
              className="cursor-pointer text-xl text-default-500"
            >
              <BiSearchAlt size={25} />
            </div>
          }
          classNames={{
            endContentWrapper: "hidden",
          }}
          listboxProps={{
            emptyContent: "Hmm… nič sme nenašli.",
          }}
          popoverProps={{
            offset: 10,
            classNames: {
              base: "rounded-large",
              content: "p-1 border-small border-default-100 bg-background",
            },
          }}
        >
          {(item: SearchItem) => (
            <AutocompleteItem key={item.id} textValue={item.name}>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.name}
                    className="shrink-0"
                    size="sm"
                    src={item.avatar}
                  />
                  <span className="text-small">{item.name}</span>
                </div>
              </div>
            </AutocompleteItem>
          )}
        </Autocomplete>
      </motion.div>
    </div>
  );
}
