import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { Tab, Tabs } from "@heroui/react";
import { lazy, Suspense, useState } from "react";
import { Fallback } from "@/components/Fallback.tsx";

const OnlineCalculatorTab = lazy(
  () => import("@/components/Calculator/OnlineCalculator/Tab.tsx"),
);
const RequestCalculatorTab = lazy(
  () => import("@/components/Calculator/RequestCalculator/Tab.tsx"),
);

export default function TabsWrapper() {
  const [selectedTab, setSelectedTab] = useState("calculator");

  return (
    <motion.section
      variants={itemVariants}
      className="container mx-auto flex flex-col justify-center items-center gap-6"
    >
      <Tabs
        color="primary"
        size="lg"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
        classNames={{
          tabList: "p-1.5 rounded-2xl",
          cursor: "rounded-xl",
          tab: "h-11",
          tabContent: "group-data-[selected=true]:text-white px-2 text-lg",
        }}
      >
        <Tab title="Online kalkulácia" key="calculator" className="w-full">
          <Suspense fallback={<Fallback />}>
            <OnlineCalculatorTab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </Suspense>
        </Tab>

        <Tab
          title="Individuálna ponuka"
          key="individual-offer"
          className="w-full"
        >
          <Suspense fallback={<Fallback />}>
            <RequestCalculatorTab />
          </Suspense>
        </Tab>
      </Tabs>
    </motion.section>
  );
}
