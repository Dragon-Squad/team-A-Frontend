import { AUTH_URL, USER_URL } from "@/config/httpConfig";
import {
  LoginResponse,
  OTPResponse,
  RegisterResponse,
  User,
} from "@/types/auth";
import { encodeSecureCredentials } from "@/utils/encoder";
import { httpRequest } from "@/utils/http-request";

export default class AuthService {
  static async register(
    email: string,
    password: string,
    username: string,
    role: string,
  ): Promise<RegisterResponse> {
    try {
      const url = `${AUTH_URL}/register`;
      const encryptedHeader = await encodeSecureCredentials(email, password);

      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: encryptedHeader,
      });

      const body = JSON.stringify({ email, password, username, role });

      const response = await httpRequest(url, "POST", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to register");
      }

      const data = (await response.json()) as RegisterResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }

  static async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const url = `${AUTH_URL}/login`;
      const encryptedHeader = await encodeSecureCredentials(email, password);

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://crack-rightly-cow.ngrok-free.app",
        Authorization: encryptedHeader,
      });

      const body = JSON.stringify({ email, password });

      const response = await httpRequest(url, "POST", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to login");
      }

      const data = (await response.json()) as LoginResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }

  static async verifyOTP(email: string, otp: string): Promise<OTPResponse> {
    try {
      const url = `${AUTH_URL}/verify-email`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://crack-rightly-cow.ngrok-free.app",
      });

      const body = JSON.stringify({ email, otp });

      const response = await httpRequest(url, "POST", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to otp");
      }

      const data = (await response.json()) as OTPResponse;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }

  static async getUser(userId: string): Promise<User> {
    try {
      const url = `${USER_URL}/${userId}`;

      const headers = new Headers({
        "Content-Type": "application/json",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch user: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as User;
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  }
}
