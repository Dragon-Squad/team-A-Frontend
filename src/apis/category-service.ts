import { PROJECT_URL } from "@/config/httpConfig";
import { ApiResponse } from "@/types/project";
import { httpRequest } from "@/utils/http-request";

export default class CategoryService {
  static getAllCagetories = async (): Promise<ApiResponse> => {
    try {
      const url = `${PROJECT_URL}/all`;

      const headers = new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as ApiResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };
}
