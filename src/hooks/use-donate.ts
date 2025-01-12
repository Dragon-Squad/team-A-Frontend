import { DONATION_URL } from "@/config/httpConfig";
import { useState } from "react";

interface DonateResponse {
  success: boolean;
  message: string;
  userId?: string;
  checkoutUrl?: string;
}

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
      const response = await fetch(`${DONATION_URL}/new`, {
        method: "POST",
        headers: {
          credentials: "include",
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donorId,
          amount,
          projectId,
          donationType,
          message,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to donate");
      }

      const data = (await response.json()) as DonateResponse;
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
