import { createFileRoute } from "@tanstack/react-router";
import ShowcaseFigure from "@/components/Showcase";
import GallerySection from "@/components/GallerySection";
import Banner from "@/components/Banner";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">Precíznosť</span>
            <br /> v obraze
          </>
        }
      >
        <ShowcaseFigure
          objectUrl={"/models/figure--model.glb"}
          position={{
            x: 0,
            y: -2.3,
            z: 0,
          }}
        />
      </Banner>

      <GallerySection />
    </div>
  );
}
