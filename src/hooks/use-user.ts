import { useState, useEffect } from "react";
import { encodeSecureCredentials } from "@/utils/encoder";

//register hook
interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
}

export function useRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (
    email: string,
    password: string,
    username: string,
    role: string,
  ): Promise<RegisterResponse> => {
    setLoading(true);
    setError(null);

    try {
      const encryptedHeader = await encodeSecureCredentials(email, password);
      const response = await fetch(
        "http://localhost:3000/api/auth/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: encryptedHeader,
          },
          body: JSON.stringify({ email, password, username, role }),
        },
      );

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to register");
      }

      const data = (await response.json()) as RegisterResponse;
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

  return { registerUser, loading, error };
}

//login hook
interface LoginResponse {
  success: boolean;
  message: string;
  userId: string;
}

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (
    email: string,
    password: string,
  ): Promise<LoginResponse> => {
    setLoading(true);
    setError(null);

    try {
      const encryptedHeader = await encodeSecureCredentials(email, password);
      const headers = {
        "Content-Type": "application/json",
        Authorization: encryptedHeader,
      };

      const response = await fetch("http://100.112.207.9:3000/api/auth/login", {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to login");
      }

      const data = (await response.json()) as LoginResponse;

      if (data.userId) {
        console.log("Saving userId:", data.userId);
        localStorage.setItem("userId", data.userId);
      }

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

  return { loginUser, loading, error };
}

//OTP hook
interface OTPResponse {
  success: boolean;
  message: string;
  userId?: string;
}

export function useOTP() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const otpUser = async (email: string, otp: string): Promise<OTPResponse> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        },
      );

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to otp");
      }

      const data = (await response.json()) as RegisterResponse;
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

  return { otpUser, loading, error };
}

//Get user by id
interface User {
  username: string;
  email: string;
  role: string;
  avatar: string;
  introVideo: string;
}

export const useFetchUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://100.112.207.9:3000/api/users/${userId}`,
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch user: ${response.status} ${response.statusText}`,
          );
        }

        const data: User = await response.json();
        setUser(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};
