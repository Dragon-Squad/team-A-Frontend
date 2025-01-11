import { useState } from "react";
import { useRegister, useLogin, useOTP } from "@/hooks/use-user";
import { useNavigate } from "react-router-dom";

//Signup
export const useRegisterForm = () => {
  const { registerUser } = useRegister();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegisterSubmit = async (data: {
    email: string;
    password: string;
    username: string;
    role: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, password, username } = data;
      const response = await registerUser(email, password, username, role);
      console.log("Registration successful:", response);

      navigate("/otp", { state: { email } });
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegisterSubmit,
    loading,
    error,
  };
};

//Login
export const useLoginForm = () => {
  const { loginUser } = useLogin();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLoginSubmit = async (data: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, password } = data;
      const response = await loginUser(email, password);
      console.log("Login successful:", response);
      navigate("/", { state: { email } });
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLoginSubmit,
    loading,
    error,
  };
};

//OTP
export const useOTPForm = () => {
  const { otpUser } = useOTP();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOTPSubmit = async (data: { email: string; otpCode: string }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, otpCode } = data;
      const response = await otpUser(email, otpCode);
      console.log("OTP verification successful:", response);
    } catch (err) {
      setError("OTP verification failed. Please try again.");
      console.error("OTP verification error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleOTPSubmit,
    loading,
    error,
  };
};
