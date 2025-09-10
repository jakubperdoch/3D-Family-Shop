import { createFileRoute } from "@tanstack/react-router";
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import SettingsTab from "@/components/Profile/SettingsTab.tsx";
import OrdersTab from "@/components/Profile/OrdersTab.tsx";

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});

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
          <SettingsTab />
        </Tab>
        <Tab title="Objednávky" key="orders">
          <OrdersTab />
        </Tab>
      </Tabs>
    </section>
  );
}
