import { Spinner } from "@heroui/react";

export const Fallback = () => {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
      <Spinner classNames={{ label: "text-foreground mt-4" }} variant="dots" />
    </div>
  );
};
