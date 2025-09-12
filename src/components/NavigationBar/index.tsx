import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import NavigationCart from "@/components/NavigationBar/NavigationCart.tsx";

import type { RootState } from "@/store/types.ts";
import LogoIcon from "@/components/Icon/logo.tsx";
import NavigationSearch from "@/components/NavigationBar/NavigationSearch.tsx";
import { useState } from "react";

const navigationItems = [
  {
    label: "Produkty",
    enableDropdown: true,
    items: [
      { label: "3D Foto lampy", collection: "3d-lamps" },
      { label: "Dekorácie a zápichy na torty", collection: "cake-toppers" },
      { label: "Zákazková 3D tlač", collection: "custom-3d-printing" },
    ],
  },
  {
    label: "Služby",
    enableDropdown: true,
    items: [
      { label: "Modelovanie", to: "/modeling" },
      { label: "Školenia", to: "/courses" },
      { label: "Kalkulačka na 3d tlač", to: "/calculator" },
    ],
  },
  { label: "Fotogaléria", to: "/gallery" },
];

export default function NavigationBar() {
  const cartCount = useSelector(
    (state: RootState) => state.cart?.totalQuantity,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div variants={itemVariants} className="container mx-auto">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        maxWidth="full"
        classNames={{
          wrapper:
            "bg-[#0D0D0D] border border-[#FFFFFF33] mt-6 rounded-3xl mx-auto",

          base: "!bg-transparent rounded-3xl backdrop-blur-none backdrop-filter-none",
        }}
      >
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand>
            <Link
              to={"/"}
              className="[&.active]:text-primary transition-colors duration-300 ease-in-out"
            >
              <LogoIcon />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-9" justify="start">
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
                  {item.items!.map((opt) =>
                    "collection" in opt ? (
                      <DropdownItem key={opt.collection}>
                        <Link
                          to="/collections/$collection"
                          params={{ collection: opt.collection }}
                          className="text-sm flex w-full transition-colors duration-300 ease-in-out [&.active]:text-primary"
                        >
                          {opt.label}
                        </Link>
                      </DropdownItem>
                    ) : (
                      <DropdownItem key={opt.to}>
                        <Link
                          to={opt.to}
                          className="text-sm flex w-full transition-colors duration-300 ease-in-out [&.active]:text-primary"
                        >
                          {opt.label}
                        </Link>
                      </DropdownItem>
                    ),
                  )}
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

        <NavbarContent justify="center" className="max-lg:hidden">
          <Link
            to={"/"}
            className="[&.active]:text-primary transition-colors duration-300 ease-in-out"
          >
            <LogoIcon />
          </Link>
        </NavbarContent>

        <NavbarContent className="gap-7" justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavigationSearch />
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
            <NavigationCart count={cartCount ?? 0} />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mt-6 !container mx-auto">
          <NavbarMenuItem>Ahoj</NavbarMenuItem>
          <NavbarMenuItem>Ahoj</NavbarMenuItem>

          <NavbarMenuItem>Ahoj</NavbarMenuItem>
          <NavbarMenuItem>Ahoj</NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
