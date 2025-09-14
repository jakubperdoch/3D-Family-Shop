import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react";
import { navigationItems } from "@/components/NavigationBar/index.tsx";
import LogoIcon from "@/components/Icon/logo.tsx";
import { Link } from "@tanstack/react-router";

type NavigationDrawerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function NavigationDrawer({
  isOpen,
  onOpenChange,
}: NavigationDrawerProps) {
  return (
    <Drawer
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      classNames={{
        backdrop: "bg-black/80",
      }}
    >
      <DrawerContent className="pt-8">
        {(onClose) => (
          <>
            <DrawerHeader className="mx-auto">
              <Link
                onClick={onClose}
                to={"/"}
                className="[&.active]:text-primary transition-colors duration-300 ease-in-out"
              >
                <LogoIcon />
              </Link>
            </DrawerHeader>
            <DrawerBody>
              {navigationItems.map((item) => (
                <div className="flex flex-col gap-1 mb-6">
                  {"to" in item ? (
                    <Link
                      onClick={onClose}
                      to={item.to}
                      className="font-medium text-xl mb-1 transition-colors duration-300 ease-in-out [&.active]:text-primary"
                      key={item.label}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <h2 className="font-medium text-xl mb-1" key={item.label}>
                      {item.label}
                    </h2>
                  )}
                  {!!item.items &&
                    item.items.map((subItem) =>
                      "collection" in subItem ? (
                        <Link
                          onClick={onClose}
                          to="/collections/$collection"
                          params={{ collection: subItem.collection }}
                          className="ms-3 transition-colors duration-300 ease-in-out [&.active]:text-primary"
                          key={subItem.label}
                        >
                          {subItem.label}
                        </Link>
                      ) : (
                        <Link
                          onClick={onClose}
                          to={subItem.to}
                          className="ms-3 transition-colors duration-300 ease-in-out [&.active]:text-primary"
                          key={subItem.label}
                        >
                          {subItem.label}
                        </Link>
                      ),
                    )}
                </div>
              ))}
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
