import FileUploader from "@/components/FileUploader";
import { addToast, Button, Select, SelectItem, Textarea } from "@heroui/react";
import {
  colorOptions,
  infillOptions,
  materialOptions,
  qualityOptions,
  strengthOptions,
} from "@/constants/calculatorOptions.ts";
import { useState } from "react";
import * as THREE from "three";
import { type z } from "zod";

import { onlinePriceRequestSchema } from "@/schemas/onlinePriceRequest.schema.ts";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RequestCalculatorForm() {
  const [results, setResults] = useState<
    Record<string, { size: THREE.Vector3; volume: number }>
  >({});

  const methods = useForm<z.infer<typeof onlinePriceRequestSchema>>({
    resolver: zodResolver(onlinePriceRequestSchema) as any,
    defaultValues: {
      files: [],
      material: "pla",
      strength: "daily-use",
      quality: "standard",
      infill: "high",
      color: "black",
      note: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<z.infer<typeof onlinePriceRequestSchema>> = (
    data,
  ) => {
    console.log(data);

    addToast({
      title: "Žiadosť odoslaná",
      description:
        "Vaša individuálna žiadosť o kalkuláciu bola úspešne odoslaná.",
      severity: "success",
      color: "success",
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-dark-gray col-start-2 row-span-2 max-lg:col-span-2 rounded-3xl px-8 py-7"
      >
        <FileUploader
          results={results}
          setResults={setResults}
          acceptedFileTypes={[".stl", ".obj", ".3mf"]}
          placeholderTitle="Priložte podklady"
          placeholderDescription="Podporovaný formát: .STL alebo prípadne náčrty, fotografie, obrázky"
          errorMessage={
            Array.isArray(errors.files)
              ? errors.files[0]?.message
              : (errors.files as any)?.message
          }
        />

        <div className="grid grid-cols-2 gap-4 mt-12">
          {/* Poznámka */}
          <Textarea
            isClearable
            isRequired
            variant="bordered"
            label="Špecifikácia požiadavky"
            description="Opíšte čo najdetailnejšie, čo potrebujete – rozmer, účel použitia, materiál, farbu, odolnosť… čím viac detailov, tým presnejšia bude ponuka."
            className="col-span-2"
            classNames={{
              inputWrapper: "border border-white/60 rounded-xl",
            }}
            {...register("note")}
            isInvalid={!!errors.note}
            errorMessage={errors.note?.message}
          />

          {/* Material */}
          <Select
            size="sm"
            label="Zvolený materiál"
            className="col-span-2"
            variant="bordered"
            classNames={{
              trigger: "border border-white/60 rounded-xl",
            }}
            {...register("material")}
            isInvalid={!!errors.material}
            errorMessage={errors.material?.message}
          >
            {materialOptions.map((material) => (
              <SelectItem key={material.value}>{material.label}</SelectItem>
            ))}
          </Select>

          {/* Výplň */}
          <Select
            size="sm"
            label="Výplň modelu"
            variant="bordered"
            className="col-span-2"
            classNames={{
              trigger: "border border-white/60 rounded-xl",
            }}
            {...register("infill")}
            isInvalid={!!errors.infill}
            errorMessage={errors.infill?.message}
          >
            {infillOptions.map((infill) => (
              <SelectItem key={infill.value}>{infill.label}</SelectItem>
            ))}
          </Select>

          {/* Kvalita */}
          <Select
            size="sm"
            label="Kvalita tlače"
            variant="bordered"
            className="col-span-2"
            classNames={{
              trigger: "border border-white/60 rounded-xl",
            }}
            {...register("quality")}
            isInvalid={!!errors.quality}
            errorMessage={errors.quality?.message}
          >
            {qualityOptions.map((quality) => (
              <SelectItem key={quality.value}>{quality.label}</SelectItem>
            ))}
          </Select>

          {/* Pevnosť */}
          <Select
            size="sm"
            label="Ako veľmi má byť model odolný?"
            variant="bordered"
            className="col-span-2"
            classNames={{
              trigger: "border border-white/60 rounded-xl",
            }}
            {...register("strength")}
            isInvalid={!!errors.strength}
            errorMessage={errors.strength?.message}
          >
            {strengthOptions.map((strength) => (
              <SelectItem key={strength.value}>{strength.label}</SelectItem>
            ))}
          </Select>

          {/* Farba */}
          <Select
            size="sm"
            label="Farba výtlačku"
            variant="bordered"
            className="max-lg:col-span-2"
            classNames={{
              trigger: "border border-white/60 rounded-xl",
            }}
            {...register("color")}
            isInvalid={!!errors.color}
            errorMessage={errors.color?.message}
          >
            {colorOptions.map((color) => (
              <SelectItem key={color.value}>{color.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex items-end justify-end">
          <Button
            aria-label="Odoslať žiadosť o kalkuláciu"
            size="lg"
            color="primary"
            type="submit"
            className="text-white w-fit mt-12 font-medium"
          >
            Získať ponuku na mieru
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
