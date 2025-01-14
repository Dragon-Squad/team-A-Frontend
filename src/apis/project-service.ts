import { PROJECT_URL } from "@/config/httpConfig";
import {
  ApiResponse,
  CreateProject,
  createProjectResponse,
  EditProject,
  ProjectByIdDetail,
  updateProject,
  updateProjectResponse,
} from "@/types/project";
import { httpRequest } from "@/utils/http-request";

export default class ProjectService {
  static getAllProjects = async (
    name?: string,
    charityName?: string,
    categoryIds?: string[],
    regionId?: string,
  ): Promise<ApiResponse> => {
    try {
      let url = `${PROJECT_URL}/all?status=active&`;

      if (name) {
        url += `search=${name}&`;
      }

      if (charityName) {
        url += `charityName=${charityName}&`;
      }

      if (categoryIds) {
        categoryIds.forEach((categoryId) => {
          url += `categoryIds=${categoryId}&`;
        });
      }

      if (regionId) {
        url += `regionId=${regionId}&`;
      }

      const headers = new Headers({
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

  static getProjectById = async (id: string): Promise<ProjectByIdDetail> => {
    try {
      const url = `${PROJECT_URL}/${id}`;

      const headers = new Headers({
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
  ): Promise<ApiResponse> => {
    try {
      const url = `${PROJECT_URL}/all?charityIds=${charityId}`;

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
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

  static async updateProjectById(
    projectId: string,
    updateData: EditProject,
  ): Promise<updateProjectResponse> {
    try {
      const url = `${PROJECT_URL}/${projectId}`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      });
      const body = JSON.stringify(updateData);
      const response = await httpRequest(url, "PUT", headers, body);

      if (!response.ok) {
        throw new Error(
          `Failed to update charity by user id: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as updateProjectResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }

  static async create(
    projectData: CreateProject,
  ): Promise<createProjectResponse> {
    try {
      const url = `${PROJECT_URL}/`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      });

      const body = JSON.stringify(projectData);

      const response = await httpRequest(url, "POST", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to create project");
      }

      const data = (await response.json()) as createProjectResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }
}
