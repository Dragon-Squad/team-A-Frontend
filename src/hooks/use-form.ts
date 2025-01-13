import { useState } from "react";
import { useRegister, useLogin, useOTP } from "@/hooks/use-user";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/components/ui/showToast";

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
    role: string | string[];
  }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, password, username, role } = data;

      const transformedRole = Array.isArray(role) ? role[0] : role;
      const response = await registerUser(
        email,
        password,
        username,
        transformedRole,
      );
      console.log("Registration successful:", response);
      showToast(
        `You have been successfully signed up , Welcome ${email}`,
        "success",
      );

      navigate("/otp", { state: { email } });
    } catch (err) {
      showToast(`Signed in failed please try again: ${error}`, "destructive");
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

      showToast(
        `You have been successfully signed up , Welcome ${email}`,
        "success",
      );
      console.log("Login successful:", response);
      navigate("/", { state: { email } });
    } catch (err) {
      showToast(`Logged in failed please try again: ${error}`, "destructive");
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
  const navigate = useNavigate();

  const handleOTPSubmit = async (data: { email: string; otpCode: string }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, otpCode } = data;
      const response = await otpUser(email, otpCode);
      console.log("OTP verification successful:", response);
      showToast(
        `You have been successfully verified your email please log in.`,
        "success",
      );
      navigate("/signin");
    } catch (err) {
      showToast(`Logged in failed please try again: ${err}.`, "destructive");
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
