import { createFileRoute } from "@tanstack/react-router";
import RelatedProductsSection from "@/components/RelatedProductsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/store/slices/cartSlice.ts";
import type { RootState } from "@/store/types.ts";
import { Image } from "@heroui/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { containerVariants, itemVariants } from "@/utils/animations.ts";
import { motion } from "framer-motion";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "@heroui/react";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  const dispatch = useDispatch();

  // Selectors to get cart items, total quantity, and total price from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <RevealOnScroll
      variants={containerVariants}
      className="container flex flex-col gap-32 mx-auto mt-12 mb-10"
    >
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-[auto_auto] items-center gap-6"
      >
        <div
          className={`flex flex-col gap-12 bg-[#B48CDE33] w-fit p-6 rounded-2xl ${totalQuantity > 0 ? "" : "min-h-52 col-span-2 w-full justify-center items-center"}`}
        >
          {totalQuantity > 0 ? (
            <div>
              <h4 className="font-bold text-4xl mb-2">Váš košík</h4>
              <span className="opacity-80 text-[1rem]">
                Položky vo vašom košíku nie sú rezervované – dokončite nákup
                teraz, aby boli vaše.
              </span>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-4xl mb-2">Váš košík je prázdny</h4>
              <span className="opacity-80 text-[1rem]">
                Pridajte položky do košíka a začnite nakupovať.
              </span>
            </div>
          )}

          {totalQuantity > 0 && cartItems && cartItems?.length > 0 && (
            <div>
              {cartItems.map((item) => (
                <motion.div
                  variants={itemVariants}
                  className="cartItem flex gap-6"
                  key={item?.id}
                >
                  <Image
                    removeWrapper
                    src={item?.image}
                    className="max-w-[12rem] h-auto object-cover"
                  />

                  <div className="grid grid-cols-[auto_auto] gap-x-20 gap-y-6">
                    <div>
                      <h5 className="text-2xl font-semibold">{item?.title}</h5>
                      <p className="opacity-80 text-lg">{item?.category}</p>
                      <p className="opacity-80 text-lg">{item?.material}</p>
                    </div>

                    <div className="flex items-center justify-between opacity-80 max-w-20">
                      <FaMinus
                        className="cursor-pointer"
                        onClick={() => dispatch(decreaseQuantity(item?.id))}
                      />
                      <span
                        className="select-none
"
                      >
                        {item?.quantity}
                      </span>
                      <FaPlus
                        className="cursor-pointer"
                        onClick={() => dispatch(increaseQuantity(item?.id))}
                      />
                    </div>

                    <IoTrashBinOutline
                      className="h-8 w-8 opacity-80 col-span-2 mt-3 hover:text-red-500 transition-colors duration-150 ease-in-out cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item?.id))}
                    />

                    <span className="row-start-1 select-none col-start-2 justify-self-end text-2xl font-semibold text-primary">
                      {item?.price.toFixed(2)}€
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {totalQuantity > 0 && (
          <motion.div className="w-full">
            <h3 className="text-[2rem] font-semibold">Prehľad objednávky</h3>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex justify-between">
                <span className="text-lg">Počet položiek</span>
                <span className="text-lg opacity-80">{totalQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg">Celková cena</span>
                <span className="text-lg opacity-80">
                  {totalPrice.toFixed(2)}€
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg">Doprava</span>
                <span className="text-lg opacity-80">-</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-lg font-semibold">Celkom</span>
                <span className="text-lg font-semibold text-primary">
                  {totalPrice.toFixed(2)}€
                </span>
              </div>

              <Button
                className="text-white text-sm font-medium"
                color={"primary"}
              >
                Prejsť k pokladni
              </Button>
            </div>
          </motion.div>
        )}
      </motion.section>

      <RelatedProductsSection />
    </RevealOnScroll>
  );
}
