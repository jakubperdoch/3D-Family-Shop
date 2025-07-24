import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import NavigationCart from "@/components/NavigationBar/NavigationCart.tsx";

const navigationItems = [
  { label: "Domov", to: "/" },
  {
    label: "Produkty",
    enableDropdown: true,
    items: [
      { label: "3D tlačiarne", collection: "3d-printers" },
      { label: "Tlačové materiály", collection: "print-materials" },
      { label: "Príslušenstvo", collection: "accessories" },
      { label: "Náhradné diely", collection: "spare-parts" },
      { label: "Služby a servis", collection: "services" },
    ],
  },
  { label: "Kalkulačka na 3d tlač", to: "/calculator" },
  { label: "Modelovanie", to: "/modeling" },
  { label: "Školenia", to: "/trainings" },
];

export default function NavigationBar() {
  return (
    <motion.div variants={itemVariants} className="container mx-auto">
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="bg-[#0D0D0D] border border-[#FFFFFF33] rounded-3xl mt-6 mx-auto px-2"
      >
        <NavbarContent className="hidden sm:flex gap-9" justify="start">
          {navigationItems.map((item) =>
            item?.enableDropdown ? (
              <Dropdown key={item?.label}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent text-base font-medium data-[hover=true]:bg-transparent"
                      radius="sm"
                      variant="light"
                      endContent={<FaCaretDown />}
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>

                <DropdownMenu>
                  {item.items!.map((opt) => (
                    <DropdownItem key={opt.collection}>
                      <Link
                        to="/collections/$collection"
                        params={{ collection: opt.collection }}
                        className="text-sm flex w-full transition-colors duration-300 ease-in-out [&.active]:text-primary"
                      >
                        {opt.label}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                color="foreground"
                key={item.label}
                className="font-semibold text-base transition-colors duration-300 ease-in-out [&.active]:text-primary"
                to={item.to}
              >
                {item.label}
              </Link>
            ),
          )}
        </NavbarContent>

        <NavbarContent className="!grow-0 gap-7" justify="end">
          <NavbarItem>
            <Link
              to="/"
              className="text-xl font-medium hover:opacity-70 transition duration-150"
            >
              <IoSearch />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/profile"
              className="text-base font-medium hover:opacity-70 transition duration-150"
            >
              <FaUser />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <NavigationCart count={5} />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
}
