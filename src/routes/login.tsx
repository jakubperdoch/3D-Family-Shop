import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import ShowcaseCrystal from "@/components/Showcase";
import { itemVariants } from "@/utils/animations.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  staticData: { hideLayout: true },
  component: RouteComponent,
});

type ValidationSchema = {
  email: string;
  password: string;
};

function RouteComponent() {
  const validationSchema = z.object({
    email: z.email("Neplatný email").nonempty("Email je povinný"),
    password: z.string().min(6, "Heslo musí mať aspoň 6 znakov"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    getValues();
  }, [getValues]);

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <section className="min-h-screen grid grid-cols-2 items-center justify-center">
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-12 px-20"
      >
        <h2 className="text-[2.6rem] font-bold">Prihlásenie</h2>
        <form
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <Button
            type={"submit"}
            size="lg"
            color="primary"
            className="text-white col-span-2"
          >
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
          to="/register"
          className="relative w-fit mx-auto text-center text-primary group"
        >
          <span>
            Nemáš ešte účet?{" "}
            <span className="font-semibold">Zaregistruj sa</span>
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
