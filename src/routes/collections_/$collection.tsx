import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/collections_/$collection")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      collection: params.collection,
    };
  },
});

const collections = {
  name: "Modely",
  key: "models",
  items: [
    {
      id: 1,
      name: "3D fotolampy",
      key: "3d-lamps",
    },
    {
      id: 2,
      name: "Dekorácie a zápichy na torty",
      key: "cake-toppers",
    },
    {
      id: 3,
      name: "Zákazková 3D tlač",
      key: "custom-3d-printing",
    },
  ],
};

function RouteComponent() {
  const { collection } = Route.useLoaderData();

  const currentCollection = collections.items.find(
    (item) => item.key === collection,
  );

  if (!currentCollection) {
    return <div>Collection not found</div>;
  }
  return (
    <section className="container mx-auto grid grid-cols-[auto_1fr]">
      <div className="flex flex-col gap-10 justify-start mt-20">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold">{currentCollection?.name}</h1>
          <p className="text-lg text-white/80">122 položiek</p>
        </div>
        <div key={collections.name} className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{collections.name}</h2>
          <div className="flex flex-col gap-1 pl-5">
            {collections.items.map((item) => (
              <Link
                className="[&.active]:text-primary transition-colors duration-300 ease-in-out"
                to={"/collections/$collection"}
                params={{ collection: item.key }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
