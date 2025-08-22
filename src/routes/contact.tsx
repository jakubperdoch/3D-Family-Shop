import { createFileRoute } from "@tanstack/react-router";
import Banner from "@/components/Banner";
import { z } from "zod";

// Icons
import { BsEnvelope, BsTelephone, BsPinMap } from "react-icons/bs";

import type { JSX } from "react";
import { Input, Textarea } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
import { Button } from "@heroui/react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

type ContactOption = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type ValidationSchema = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  object: string;
  phone?: string;
};

const contactOptions: ContactOption[] = [
  {
    title: "Email",
    description: "info@3dfamily.sk",
    icon: <BsEnvelope size={48} className="text-white" />,
  },
  {
    title: "Telefón",
    description: "+421 901 222 333",
    icon: <BsTelephone size={48} className="text-white" />,
  },
  {
    title: "Adresa",
    description: "3D-Family, Hlavná 123, 010 01 Žilina",
    icon: <BsPinMap size={48} className="text-white" />,
  },
];

function RouteComponent() {
  const validationSchema = z.object({
    firstName: z
      .string()
      .min(2, "Meno musí mať aspoň 2 znaky")
      .nonempty("Meno je povinné"),
    lastName: z
      .string()
      .min(2, "Priezvisko musí mať aspoň 2 znaky")
      .nonempty("Priezvisko je povinné"),
    email: z.email("Neplatný email").nonempty("Email je povinný"),
    message: z
      .string()
      .min(10, "Správa musí mať aspoň 10 znakov")
      .nonempty("Správa je povinná"),
    object: z.string().nonempty("Tento výber je povinný"),
    phone: z
      .string()
      .optional()
      .refine((val) => !val || /^\+?\d{7,15}$/.test(val.replace(/\s+/g, "")), {
        message: "Neplatné telefónne číslo",
      }),
  });

  const {
    register: form,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-20 items-center justify-start mt-20">
      <Banner
        title={
          <>
            <span className="text-primary">Ozvite sa</span>,
            <br /> sme tu pre vás.
          </>
        }
      />

      <section className="container mx-auto grid grid-cols-3 gap-6 w-full">
        {contactOptions &&
          contactOptions.map((option, index) => (
            <a
              key={index}
              href={
                option.title === "Email"
                  ? `mailto:${option.description}`
                  : option.title === "Telefón"
                    ? `tel:${option.description.replace(/\s+/g, "")}`
                    : `https://maps.google.com/?q=${encodeURIComponent(option.description)}`
              }
              target={option.title === "Adresa" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-dark-gray w-full px-4 py-5 rounded-2xl flex flex-col gap-1 items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer no-underline"
            >
              {option.icon}
              <h3 className="mt-4 font-semibold text-2xl">{option.title}</h3>
              <p className="text-lg text-center">{option.description}</p>
            </a>
          ))}
      </section>

      <section className="container mx-auto flex flex-col items-center justify-center gap-12 w-full mb-10">
        <div className="text-center">
          <h2 className="font-bold text-[3.37rem]">Kontaktný formulár</h2>
          <p className="text-lg text-white/80">
            Máte otázku, záujem o spoluprácu alebo individuálnu požiadavku?
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col xl:grid grid-cols-2 gap-x-10 gap-y-12 justify-center  w-full max-w-4xl"
        >
          <Input
            size="lg"
            inputMode="text"
            type="text"
            isRequired
            labelPlacement="outside"
            classNames={{
              innerWrapper: "border-b border-white/20 w-full",
            }}
            variant="underlined"
            label="Meno"
            placeholder="Meno"
            {...form("firstName")}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
          />

          <Input
            size="lg"
            inputMode="text"
            type="text"
            isRequired
            labelPlacement="outside"
            classNames={{
              innerWrapper: "border-b border-white/20 w-full",
            }}
            variant="underlined"
            label="Priezvisko"
            placeholder="Priezvisko"
            {...form("lastName")}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
          />

          <Input
            size="lg"
            inputMode="email"
            isRequired
            label="Email"
            type="email"
            labelPlacement="outside"
            classNames={{
              innerWrapper: "border-b border-white/20 w-full",
            }}
            variant="underlined"
            placeholder="Email"
            {...form("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />

          <Input
            size="lg"
            labelPlacement="outside"
            classNames={{
              innerWrapper: "border-b border-white/20 w-full",
            }}
            variant="underlined"
            inputMode="tel"
            type="tel"
            placeholder="Voliteľné – napr. +421 901 222 333"
            label="Telefónne číslo"
            {...form("phone")}
            isInvalid={!!errors.phone}
            errorMessage={errors.phone?.message}
          />

          <RadioGroup
            isRequired
            label="O čo máte záujem?"
            orientation="horizontal"
            classNames={{
              base: "col-span-2 flex !justify-between gap-3",
              wrapper: "gap-4",
            }}
            {...form("object")}
            isInvalid={!!errors.object}
            errorMessage={errors.object?.message}
          >
            <Radio value="skolenie">Školenie</Radio>
            <Radio value="zakazkova-tlac">Zákazková 3D tlač</Radio>
            <Radio value="spolupraca">Spolupráca</Radio>
            <Radio value="poradenstvo">Poradenstvo</Radio>
            <Radio value="ine">Iné</Radio>
          </RadioGroup>

          <Textarea
            size="lg"
            isRequired
            placeholder="Vaša správa"
            labelPlacement="outside"
            label="Správa"
            variant="bordered"
            className="col-span-2"
            radius="md"
            isClearable
            {...form("message")}
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
          />

          <Button
            type={"submit"}
            size="lg"
            color="primary"
            className="text-white col-span-2 max-h-full w-xs mx-auto"
          >
            Odoslať správu
          </Button>
        </form>
      </section>
    </div>
  );
}
