import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

const navigationItems = [
  {
    label: "Produkty",
    enableDropdown: true,
    items: [
      { label: "3D tlačiarne", category: "3d-printers" },
      { label: "Tlačové materiály", category: "print-materials" },
      { label: "Príslušenstvo", category: "accessories" },
      { label: "Náhradné diely", category: "spare-parts" },
      { label: "Služby a servis", category: "services" },
    ],
  },
  { label: "Kalkulačka na 3d tlač", to: "/calculator" },
  { label: "Modelovanie", to: "/modeling" },
  { label: "Školenia", to: "/trainings" },
];

export default function NavigationBar() {
  return (
    <motion.div variants={itemVariants}>
      <Navbar
        shouldHideOnScroll={true}
        maxWidth="full"
        className="bg-[#0D0D0D] border border-[#FFFFFF33] rounded-3xl mt-6 mx-auto px-2 w-11/12"
      >
        <NavbarContent className="hidden sm:flex gap-9" justify="start">
          {navigationItems.map((item) =>
            item?.enableDropdown ? (
              <Dropdown>
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
                    <DropdownItem key={opt.category}>
                      <Link
                        to="/products/$category"
                        params={{ category: opt.category }}
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

        <NavbarContent className="!grow-0" justify="end">
          <NavbarItem className="">
            <Link to="/">Login</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
}
