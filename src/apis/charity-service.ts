import { CHARITY_URL } from "@/config/httpConfig";
import { Charity } from "../types/charity";
import { httpRequest } from "@/utils/http-request";
export default class CharityService {
  static async getCharity(userId: string): Promise<Charity> {
    try {
      const url = `${CHARITY_URL}/${userId}`;

      const headers = new Headers({
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch user: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as Charity;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }
}
