import type { ComponentPropsWithoutRef } from "react";
import { LoaderCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

type SpinnerProps = ComponentPropsWithoutRef<"svg">;

export default function Spinner({ className, ...rest }: SpinnerProps) {
  return (
    <LoaderCircle
      aria-label="Loading"
      className={twMerge("h-6 w-6 animate-spin", className)}
      role="status"
      {...rest}
    />
  );
}
