import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import GallerySection from "@/components/GallerySection";

export const Route = createFileRoute("/modeling")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">Presnosť</span>,
            <br /> ktorú vidno.
          </>
        }
      />

      <GallerySection />
    </div>
  );
}
