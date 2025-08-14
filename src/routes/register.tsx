import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Input } from "@heroui/input";
import { Button, Checkbox } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import ShowcaseCrystal from "@/components/Showcase";
import { itemVariants } from "@/utils/animations.ts";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/register")({
  staticData: { hideLayout: true },
  component: RouteComponent,
});

type ValidationSchema = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
};

function RouteComponent() {
  const validationSchema = z
    .object({
      firstName: z
        .string()
        .min(1, { message: "Meno je povinné" })
        .nonempty("Meno je povinné"),
      lastName: z
        .string()
        .min(1, { message: "Priezvisko je povinné" })
        .nonempty("Priezvisko je povinné"),
      email: z.email("Neplatný email").nonempty("Email je povinný"),
      password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
      passwordConfirmation: z
        .string()
        .min(1, { message: "Potvrdenie hesla je povinné" }),
      terms: z.boolean().refine(Boolean, {
        message: "Musíš súhlasiť s podmienkami používania",
      }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      path: ["passwordConfirmation"],
      message: "Heslá sa nezhodujú",
    });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      terms: false,
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <section className="min-h-screen grid grid-cols-2 items-center justify-center">
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-12 px-20"
      >
        <h2 className="text-[2.6rem] font-bold">Registrácia</h2>

        <form
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            label="Meno"
            labelPlacement="outside"
            placeholder="Meno"
            size="lg"
            type="text"
            className="col-span-1"
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
            {...register("firstName")}
          />

          <Input
            isRequired
            label="Priezvisko"
            labelPlacement="outside"
            placeholder="Priezvisko"
            size="lg"
            type="text"
            className="col-span-1"
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
            {...register("lastName")}
          />

          <Input
            size="lg"
            className="col-span-2"
            inputMode="email"
            isRequired
            label="Email"
            type="email"
            labelPlacement="outside"
            placeholder="Email"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />

          <Input
            size="lg"
            className="col-span-2"
            isRequired
            label="Heslo"
            labelPlacement={"outside-top"}
            type="password"
            placeholder="Heslo"
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />

          <Input
            size="lg"
            className="col-span-2"
            isRequired
            label="Potvrdenie hesla"
            labelPlacement={"outside-top"}
            type="password"
            placeholder="Potvrdenie hesla"
            {...register("passwordConfirmation")}
            isInvalid={!!errors.passwordConfirmation}
            errorMessage={errors.passwordConfirmation?.message}
          />

          <div className="col-span-2 flex flex-col gap-2">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  isSelected={field.value ?? false}
                  onValueChange={field.onChange}
                  classNames={{ label: "text-small" }}
                  validationBehavior="aria"
                  isInvalid={!!errors.terms}
                >
                  Súhlasím s podmienkami používania a ochranou osobných údajov
                </Checkbox>
              )}
            />
            {errors.terms && (
              <span className="text-danger text-xs">
                {errors.terms.message}
              </span>
            )}
          </div>

          <Button
            type={"submit"}
            size="lg"
            color="primary"
            className="text-white col-span-2"
          >
            Zaregistrovať sa
          </Button>

          <Button
            size="lg"
            color="primary"
            variant="bordered"
            className="text-primary col-span-2"
          >
            <FaGoogle />
            Registrovať sa cez Google
          </Button>
        </form>

        <motion.hr
          style={{
            width: "100%",
            height: "2px",
          }}
          className="border-dark-gray"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <Link
          to="/login"
          className="relative w-fit mx-auto text-center text-primary group"
        >
          <span>
            Už máš účet? <span className="font-semibold">Prihlás sa</span>
          </span>
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
        </Link>
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
