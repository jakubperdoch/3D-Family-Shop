import FileUploader from "@/components/FileUploader";
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import {
  colorOptions,
  infillOptions,
  materialOptions,
  qualityOptions,
  strengthOptions,
} from "@/constants/calculatorOptions.ts";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { calculatePrice } from "@/utils/priceCalcutations.ts";
import {
  onlineCalculatorSchema,
  type OnlineCalculatorForm,
} from "@/schemas/onlineCalculator.schema";
import {
  Controller,
  FormProvider,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function OnlineCalculatorForm() {
  const [results, setResults] = useState<
    Record<string, { size: THREE.Vector3; volume: number }>
  >({});
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const methods = useForm<OnlineCalculatorForm>({
    resolver: zodResolver(onlineCalculatorSchema),
    defaultValues: {
      files: [],
      material: "pla",
      strength: "daily-use",
      quality: "standard",
      infill: "high",
      color: "black",
      count: 1,
      note: "",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors },
  } = methods;

  const { material, strength, quality, infill, count } = watch();

  useEffect(() => {
    const handlePriceChange = async () => {
      if (Object.keys(results).length === 0) {
        setTotalPrice(null);
      }

      let totalPrice = 0;

      for (const key in results) {
        const result = results[key];
        const calculatedPrice = calculatePrice(result.volume, {
          material: material || "pla",
          strength: strength || "daily-use",
          quality: quality || "standard",
          infill: infill || "high",
          count: count || 1,
        });
        totalPrice += calculatedPrice;
      }

      setTotalPrice(totalPrice);
    };

    handlePriceChange().catch((error) => {
      console.error("Error calculating price:", error);
    });
  }, [results, material, strength, quality, infill, count]);

  const onSubmit: SubmitHandler<OnlineCalculatorForm> = (data) => {
    console.log("Form data", data);
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
          errorMessage={
            Array.isArray(errors.files)
              ? errors.files[0]?.message
              : (errors.files as any)?.message
          }
        />

        <div className="grid grid-cols-2 gap-4 mt-12">
          {/* Material */}
          <Select
            size="sm"
            label="Zvolený materiál"
            className="col-span-2"
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
            className="col-span-2"
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
            className="col-span-2"
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
            className="col-span-2"
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
            className="max-lg:col-span-2"
            {...register("color")}
            isInvalid={!!errors.color}
            errorMessage={errors.color?.message}
          >
            {colorOptions.map((color) => (
              <SelectItem key={color.value}>{color.label}</SelectItem>
            ))}
          </Select>

          {/* Počet */}
          <Controller
            name="count"
            control={control}
            render={({ field }) => (
              <NumberInput
                {...field}
                size="sm"
                minValue={1}
                maxValue={1000}
                label="Počet kusov"
                className="max-lg:col-span-2"
                value={field.value}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />

          {/* Poznámka */}
          <Textarea
            isClearable
            label="Poznámka (nepovinné)"
            className="col-span-2"
            {...register("note")}
            isInvalid={!!errors.note}
            errorMessage={errors.note?.message}
          />
        </div>

        <div className="mt-12 flex flex-col items-end gap-4">
          <span>
            Celková cena:{" "}
            <span className="font-medium text-xl">{totalPrice} €</span>
          </span>
          <span>Odhadovaná doba odoslania: </span>
          <span className="text-xs text-white/60">
            Výsledná cena sa môže líšiť po kontrole technika
          </span>

          <Button
            aria-label="Odoslať žiadosť o kalkuláciu"
            size="lg"
            color="primary"
            type="submit"
            className="text-white w-fit mt-4 font-medium"
          >
            Odoslať žiadosť o kalkuláciu
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
