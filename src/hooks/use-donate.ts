import DonationService from "@/apis/donation-service";
import { DonateResponse } from "@/types/donate";
import { useState } from "react";

export function useDonate() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const donate = async (
    donorId: string,
    amount: number,
    projectId: string,
    donationType: string,
    message?: string,
  ): Promise<DonateResponse> => {
    setLoading(true);
    setError(null);

    try {
      const data: DonateResponse = await DonationService.donate(
        donorId,
        amount,
        projectId,
        donationType,
        message,
      );
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { donate, loading, error };
}
