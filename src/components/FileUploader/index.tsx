import { Input } from "@heroui/input";
import { type ChangeEvent, useState } from "react";
import PreviewModel from "@/components/FileUploader/PreviewModel.tsx";
import {
  calculateObjectSize,
  calculateObjectVolume,
} from "@/utils/objectCalculations.ts";
import { Icon } from "@iconify/react";
import * as THREE from "three";
import { Button } from "@heroui/react";
import { IoClose } from "react-icons/io5";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<
    Record<string, { size: THREE.Vector3; volume: number }>
  >({});

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);

      for (const file of newFiles) {
        // calculate size + volume
        const size = await calculateObjectSize(file);
        const volume = await calculateObjectVolume(file);

        setResults((prev) => ({
          ...prev,
          [file.name]: { size, volume },
        }));
      }

      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setResults((prev) => {
      const { [fileName]: _, ...rest } = prev;
      return rest;
    });
  };

  return (
    <div>
      <Input
        type="file"
        id="files"
        className="hidden"
        accept=".stl"
        onChange={handleFileChange}
        multiple
      />
      <label htmlFor="files">
        <div className="flex items-center justify-center w-full h-72 border border-dashed border-white/60 rounded-2xl cursor-pointer bg-dark-gray">
          {files.length === 0 && (
            <div className="h-full w-full px-8 grid grid-cols-2 items-center justify-center">
              <div className="text-center flex flex-col gap-1">
                <h3 className="text-xl font-medium">Nahrajte 3D modely</h3>
                <p className="text-white/60">STL (max. 200 MB)</p>
              </div>

              <Icon icon="line-md:uploading-loop" className="h-1/3 w-full" />
            </div>
          )}

          {files.length > 0 && (
            <div className="w-full rounded-2xl py-8 px-8 h-full overflow-y-auto custom-scroll pr-2">
              <ul className="grid lg:grid-cols-2 gap-4">
                {files.map((file, index) => {
                  const result = results[file.name];
                  return (
                    <li
                      key={index}
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
          )}
        </div>
      </label>
    </div>
  );
}
