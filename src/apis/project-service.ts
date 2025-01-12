import { PROJECT_URL } from "@/config/httpConfig";
import { ApiResponse, ProjectByIdDetail } from "@/types/project";
import { httpRequest } from "@/utils/http-request";

export default class ProjectService {
  static getAllProjects = async (): Promise<ApiResponse> => {
    try {
      const url = `${PROJECT_URL}/all`;

      const headers = new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Cache-Control": "no-cache",
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

  static getProjectById = async (id: string): Promise<ProjectByIdDetail> => {
    try {
      const url = `${PROJECT_URL}/${id}`;

      const headers = new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as ProjectByIdDetail;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static getProjectByCharityIds = async (
    charityId: string,
  ): Promise<ProjectByIdDetail> => {
    try {
      const url = `${PROJECT_URL}/all?charityIds=${charityId}`;

      const headers = new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as ProjectByIdDetail;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };
}
