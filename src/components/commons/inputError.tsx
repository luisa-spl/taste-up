import { cn } from "@/lib/utils";

export function InputError({ message }: { message: string }) {
  return(
    <span className={cn("text-xs font-semibold text-destructive")}>{message}</span>
  )
};