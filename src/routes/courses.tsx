import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import PricingCardsSection from "@/components/PricingCardsSection";

export const Route = createFileRoute("/courses")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">3D školenie</span>, ktoré vás posunie
          </>
        }
      ></Banner>

      <PricingCardsSection />
    </div>
  );
}
