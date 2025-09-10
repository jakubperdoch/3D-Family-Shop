import { createFileRoute } from "@tanstack/react-router";
import { Spinner, Tab, Tabs } from "@heroui/react";
import { lazy, Suspense, useState } from "react";

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});

const SettingsTab = lazy(() => import("@/components/Profile/SettingsTab.tsx"));
const OrdersTab = lazy(() => import("@/components/Profile/OrdersTab.tsx"));

function RouteComponent() {
  const [selectedTab, setSelectedTab] = useState("orders");
  return (
    <section className="container mx-auto mt-10 flex flex-col gap-5">
      <Tabs
        aria-label="Profile tabs"
        onSelectionChange={(key) => setSelectedTab(key as string)}
        selectedKey={selectedTab}
        variant="underlined"
        classNames={{
          tabList: "p-1.5 rounded-2xl",
          cursor: "rounded-xl",
          tab: "h-10",
          tabContent: "group-data-[selected=true]:text-white px-2 text-md",
        }}
      >
        <Tab title="Nastavenia Profilu" key="settings">
          <Suspense
            fallback={
              <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
                <Spinner
                  classNames={{ label: "text-foreground mt-4" }}
                  variant="dots"
                />
              </div>
            }
          >
            <SettingsTab />
          </Suspense>
        </Tab>
        <Tab title="Objednávky" key="orders">
          <Suspense
            fallback={
              <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
                <Spinner
                  classNames={{ label: "text-foreground mt-4" }}
                  variant="dots"
                />
              </div>
            }
          >
            <OrdersTab />
          </Suspense>
        </Tab>
      </Tabs>
    </section>
  );
}
