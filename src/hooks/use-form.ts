import { useState } from "react";
import { useRegister, useLogin } from "@/hooks/use-user";

//Signup
export const useRegisterForm = () => {
  const { registerUser } = useRegister();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegisterSubmit = async (data: {
    email: string;
    password: string;
    username: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const { email, password, username } = data;
      const response = await registerUser(email, password, username, "Donor");
      console.log("Registration successful:", response);
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
