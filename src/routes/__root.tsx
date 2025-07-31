import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations.ts";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";

export const Route = createRootRoute({
  component: () => (
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
  ),
});
