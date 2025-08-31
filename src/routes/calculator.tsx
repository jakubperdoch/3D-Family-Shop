import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import TabsWrapper from "@/components/Calculator/TabsWrapper.tsx";

export const Route = createFileRoute("/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">Kalkulácia</span> ceny
            <br /> 3D tlače
          </>
        }
      />

      <TabsWrapper />
    </div>
  );
}
