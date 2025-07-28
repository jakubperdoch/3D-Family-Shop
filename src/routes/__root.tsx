import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations.ts";
import Footer from "@/components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
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
    </>
  ),
});
