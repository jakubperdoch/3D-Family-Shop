// src/schemas/onlineCalculator.schema.ts
import { z } from "zod";

// nastavenia pre upload
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200 MB
const ALLOWED_EXT = ["stl"];

const fileArraySchema = z.preprocess(
  (val) => {
    if (val instanceof FileList) {
      return Array.from(val);
    }
    return val;
  },
  z
    .array(z.instanceof(File))
    .min(1, "Nahrajte aspoň 1 model vo formáte STL.")
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
      "Podporujeme iba STL súbory (.stl).",
    ),
) as z.ZodType<File[]>;

const materialEnum = z.enum(["pla", "petg", "abs", "resin", "nylon"]);
const strengthEnum = z.enum([
  "decoration",
  "light-use",
  "daily-use",
  "mechanical",
  "extreme",
]);
const qualityEnum = z.enum(["fast", "standard", "high", "premium"]);
const infillEnum = z.enum(["low", "medium", "high"]);
const colorEnum = z.enum(["white", "black", "custom"]);

export const onlineCalculatorSchema = z.object({
  files: fileArraySchema,

  material: materialEnum,
  strength: strengthEnum,
  quality: qualityEnum,
  infill: infillEnum,

  color: colorEnum.default("black"),
  note: z.string().max(1000, "Poznámka môže mať max. 1000 znakov.").optional(),

  count: z.coerce.number().int().min(1).max(1000),
});

export type OnlineCalculatorForm = z.infer<typeof onlineCalculatorSchema>;
