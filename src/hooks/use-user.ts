import { useState, useEffect, useCallback } from "react";
import {
  LoginResponse,
  OTPResponse,
  RegisterResponse,
  User,
} from "@/types/auth";
import AuthService from "@/apis/auth-service";

//register hook
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
      const data: RegisterResponse = await AuthService.register(
        email,
        password,
        username,
        role,
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

  return { registerUser, loading, error };
}

//login hook
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
      const data = await AuthService.login(email, password);

      if (data) {
        console.log("Saving userId:", data.userId);
        localStorage.setItem("userId", data.userId);
      }

      if (data.accessToken) {
        console.log("Saving access token:", data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
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
export function useOTP() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const otpUser = async (email: string, otp: string): Promise<OTPResponse> => {
    setLoading(true);
    setError(null);

    try {
      const data: OTPResponse = await AuthService.verifyOTP(email, otp);
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
export const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      const fetchUser = async () => {
        setLoading(true);
        setError(null);

        try {
          const data: User = await AuthService.getUser(storedUserId);
          setUser(data);
          localStorage.setItem("userRole", data.role);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "An unexpected error occurred",
          );
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    } else {
      setError("User ID is not available in localStorage");
      setLoading(false);
    }
  }, []);

  return { user, loading, error };
};

const useLogout = () => {
  const logout = useCallback(() => {
    localStorage.clear();

    window.location.href = "/";
  }, []);

  return { logout };
};

export default useLogout;
