import { REGION_URL } from "@/config/httpConfig";
import { AllRegionResponse } from "@/types/region";
import { httpRequest } from "@/utils/http-request";

export default class RegionService {
  static getAllRegions = async (): Promise<AllRegionResponse> => {
    try {
      const url = `${REGION_URL}/all`;

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

      const data = (await response.json()) as AllRegionResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static subscribe = async (regionId: string): Promise<void> => {
    try {
      const url = `${REGION_URL}/subscribe/${regionId}`;

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "POST", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static unsubscribe = async (regionId: string): Promise<void> => {
    try {
      const url = `${REGION_URL}/unsubscribe/${regionId}`;

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "POST", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static notificationOn = async (regionId: string): Promise<void> => {
    try {
      const url = `${REGION_URL}/notification-on/${regionId}`;

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "POST", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static notificationOff = async (regionId: string): Promise<void> => {
    try {
      const url = `${REGION_URL}/notification-off/${regionId}`;

      const headers = new Headers({
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "POST", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };
}
