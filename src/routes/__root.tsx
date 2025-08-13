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

export const Route = createRootRoute({
  component: () => <Root />,
});

function Root() {
  const hideLayout = useRouterState({
    select: (s) => s.matches.some((m) => (m.staticData as any)?.hideLayout),
  });

  if (hideLayout)
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <Outlet />
          </motion.div>
          <TanStackRouterDevtools />
        </PersistGate>
      </Provider>
    );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <NavigationBar />
          <Outlet />
          <Footer />
        </motion.div>
        <TanStackRouterDevtools />
      </PersistGate>
    </Provider>
  );
}
