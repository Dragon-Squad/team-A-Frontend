import { toast as shadcnToast } from "@/hooks/use-toast";

export const showToast = (
  description: string,
  variant: "success" | "destructive",
) => {
  shadcnToast({
    description,
    variant,
  });
};
