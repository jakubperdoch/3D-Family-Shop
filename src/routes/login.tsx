import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import type { ValidationErrors } from "@react-types/shared";
import { FaGoogle } from "react-icons/fa6";
import ShowcaseCrystal from "@/components/Showcase";
import { itemVariants } from "@/utils/animations.ts";

export const Route = createFileRoute("/login")({
  staticData: { hideLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const getPasswordError = (value) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  return (
    <section className="min-h-screen grid grid-cols-2 items-center justify-center">
      <motion.div variants={itemVariants} className="p-20">
        <h2 className="mb-12 text-[2.6rem] font-bold">Prihlásanie</h2>

        <Form validationErrors={errors} className="grid grid-cols-2 gap-4">
          <Input
            size="lg"
            className="col-span-2"
            inputMode="email"
            isRequired
            label="Email"
            name="email"
            type="email"
            labelPlacement="outside"
            placeholder="Email"
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Email je povinný";
              }

              return null;
            }}
          />

          <Input
            size="lg"
            className="col-span-2"
            isRequired
            label="Heslo"
            labelPlacement={"outside-top"}
            name="password"
            type="password"
          />

          {errors.terms && (
            <span className="text-danger text-small">{errors.terms}</span>
          )}

          <Button size="lg" color="primary" className="text-white col-span-2">
            Prihlásiť sa
          </Button>

          <Button
            size="lg"
            color="primary"
            variant="bordered"
            className="text-primary col-span-2"
          >
            <FaGoogle />
            Prihlásiť sa cez Google
          </Button>
        </Form>
      </motion.div>

      <motion.div variants={itemVariants} className="relative h-full w-full">
        <motion.div className="absolute inset-0 bg-[url('/background--gradient.png')] bg-cover bg-center opacity-50"></motion.div>
        <ShowcaseCrystal
          objectUrl={"/models/crystals--model.glb"}
          customHeight={3.5}
          position={{
            x: 0,
            y: -0.5,
            z: 0,
          }}
        />
      </motion.div>
    </section>
  );
}
