import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations.ts";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";
import { ToastProvider } from "@heroui/react";

export const Route = createRootRoute({
  component: () => <Root />,
  notFoundComponent: () => (
    <section className="container mx-auto mt-20 rounded-3xl flex flex-col gap-4 justify-center items-center p-20 bg-dark-gray">
      <h1 className="text-5xl font-medium text-primary ">
        404 – Stratený model
      </h1>
      <span className="text-lg text-white/60 max-w-xl text-center">
        Váš 3D model sa zatiaľ nenašiel. Možno uviazol v sliceri, zmazal sa z SD
        karty alebo ešte len čaká na prvú vrstvu.
      </span>
    </section>
  ),
});

function Root() {
  const hideLayout = useRouterState({
    select: (s) => s.matches.some((m) => (m.staticData as any)?.hideLayout),
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          {!hideLayout && <NavigationBar />}

          <Outlet />

          <ToastProvider placement="top-right" />
          {!hideLayout && <Footer />}
        </motion.div>
        <TanStackRouterDevtools />
      </PersistGate>
    </Provider>
  );
}
