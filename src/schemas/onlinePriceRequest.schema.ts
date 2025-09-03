// src/schemas/onlinePriceRequest.schema.ts
import { z } from "zod";
import {
  materialEnum,
  strengthEnum,
  qualityEnum,
  infillEnum,
  colorEnum,
} from "@/schemas/onlineCalculator.schema.ts";
// nastavenia pre upload
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200 MB
const ALLOWED_EXT = ["stl", "png", "jpg", "svg"];

const fileArraySchema = z.preprocess(
  (val) => {
    if (val instanceof FileList) {
      return Array.from(val);
    }
    return val;
  },
  z
    .array(z.instanceof(File))
    .min(1, "Nahrajte aspoň 1 model vo formáte STL/PNG/JPG/SVG.")
    .refine(
      (files) => files.every((f) => f.size <= MAX_FILE_SIZE),
      "Maximálna veľkosť jedného súboru je 200 MB.",
    )
    .refine(
      (files) =>
        files.every((f) => {
          const ext = f.name.split(".").pop()?.toLowerCase();
          return !!ext && ALLOWED_EXT.includes(ext);
        }),
      "Podporujeme iba STL/PNG/JPG/SVG súbory (.stl,.png, .jpg, .svg).",
    ),
) as z.ZodType<File[]>;

export const onlinePriceRequestSchema = z.object({
  files: fileArraySchema,

  material: materialEnum,
  strength: strengthEnum,
  quality: qualityEnum,
  infill: infillEnum,

  color: colorEnum.default("black"),
  note: z
    .string()
    .max(1000, "Poznámka môže mať max. 2000 znakov.")
    .min(20, "Prosím, rozveďte požiadavku aspoň na 20 znakov."),

  count: z.coerce.number().int().min(1).max(1000),
});

export type OnlinePriceRequestForm = z.infer<typeof onlinePriceRequestSchema>;
