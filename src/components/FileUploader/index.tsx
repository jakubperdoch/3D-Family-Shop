import { Input } from "@heroui/input";
import { type ChangeEvent } from "react";
import PreviewModel from "@/components/FileUploader/PreviewModel.tsx";
import {
  calculateObjectSize,
  calculateObjectVolume,
} from "@/utils/objectCalculations.ts";
import { Icon } from "@iconify/react";
import * as THREE from "three";
import { Button } from "@heroui/react";
import { IoClose } from "react-icons/io5";
import type { OnlineCalculatorForm } from "@/schemas/onlineCalculator.schema.ts";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animations.ts";
import { useFormContext } from "react-hook-form";

type ResultsMap = Record<string, { size: THREE.Vector3; volume: number }>;

type FileUploaderProps = {
  results: ResultsMap;
  setResults: (data: ResultsMap) => void;
  errorMessage?: string;
};

export default function FileUploader({
  results,
  setResults,
  errorMessage,
}: FileUploaderProps) {
  const { setValue, watch } = useFormContext<OnlineCalculatorForm>();
  const files = watch("files") || [];

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const newFiles = Array.from(event.target.files);

    for (const file of newFiles) {
      const size = await calculateObjectSize(file);
      const volume = await calculateObjectVolume(file);

      setResults({
        ...results,
        [file.name]: { size, volume },
      });
    }

    // push new files into RHF state
    setValue("files", [...files, ...newFiles], { shouldValidate: true });
  };

  const handleRemoveFile = (fileName: string) => {
    const updated = files.filter((file) => file.name !== fileName);
    const { [fileName]: _, ...rest } = results;
    setResults(rest);

    // remove file from RHF state
    setValue("files", updated, { shouldValidate: true });
  };

  return (
    <div className="col-span-2 h-fit">
      <Input
        type="file"
        id="files"
        className="hidden"
        accept=".stl"
        multiple
        onChange={handleFileChange}
      />

      {files.length === 0 && (
        <label htmlFor="files">
          <div className="flex items-center justify-center w-full h-72 border border-dashed border-white/60 rounded-2xl cursor-pointer bg-dark-gray">
            <div className="h-full w-full px-8 grid grid-cols-2 items-center justify-center">
              <div className="text-center flex flex-col gap-1">
                <h3 className="text-xl font-medium">Nahrajte 3D modely</h3>
                <p className="text-white/60">STL (max. 200 MB)</p>
              </div>
              <Icon icon="line-md:uploading-loop" className="h-1/3 w-full" />
            </div>
          </div>
        </label>
      )}

      {files.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="bg-dark-gray border border-dashed overflow-hidden border-white/60 rounded-2xl">
            <div className="w-full h-72 rounded-2xl py-8 px-8 overflow-y-auto custom-scroll ">
              <ul className="grid lg:grid-cols-2 gap-4">
                {files.map((file) => {
                  const result = results[file.name];
                  return (
                    <li
                      key={file.name}
                      className="relative bg-white/20 border border-white/20 p-4 rounded-2xl"
                    >
                      <Button
                        className="absolute top-2 right-2 rounded-full"
                        isIconOnly
                        variant="light"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleRemoveFile(file.name);
                        }}
                      >
                        <IoClose color="white" size={20} />
                      </Button>

                      <PreviewModel file={file} />
                      <p className="mt-2 font-semibold line-clamp-1">
                        {file.name}
                      </p>

                      {result ? (
                        <div className="text-sm text-white/80 mt-2">
                          <p>
                            Rozmery:{" "}
                            <strong>
                              {result.size.x.toFixed(2)} ×{" "}
                              {result.size.y.toFixed(2)} ×{" "}
                              {result.size.z.toFixed(2)} mm
                            </strong>
                          </p>
                        </div>
                      ) : (
                        <p className="text-white/50">Počítam…</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-fit ms-auto">
            <Button
              variant="flat"
              color="primary"
              onPress={() => {
                document.getElementById("files")?.click();
              }}
            >
              + Pridať ďalšie súbory
            </Button>
          </div>
        </div>
      )}

      {!!errorMessage && (
        <motion.div
          variants={itemVariants}
          className="bg-red-500 text-white py-2 px-4 rounded-lg my-4"
        >
          <p>{errorMessage}</p>
        </motion.div>
      )}
    </div>
  );
}
