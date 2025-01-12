import { DONATION_URL } from "@/config/httpConfig";
import { DonateResponse } from "@/types/donate";
import { httpRequest } from "@/utils/http-request";

export default class DonationService {
  static donate = async (
    donorId: string,
    amount: number,
    projectId: string,
    donationType: string,
    message?: string,
  ): Promise<DonateResponse> => {
    try {
      const url = `${DONATION_URL}/new`;

      const body = JSON.stringify({
        donorId,
        amount,
        projectId,
        donationType,
        message,
      });

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "POST", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to register");
      }

      const data = (await response.json()) as DonateResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };
}
