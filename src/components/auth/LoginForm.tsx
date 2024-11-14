import React, { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react"; // Icons from Tabler
import { Button } from "../ui/button";
import NavigationBar from "../ui/navigation-bar";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    emailOrPhone: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    // Basic validation for empty fields
    if (!emailOrPhone) {
      valid = false;
      newErrors.emailOrPhone = "Email or phone number is required.";
    }
    if (!password) {
      valid = false;
      newErrors.password = "Password is required.";
    }

    // Validate email or phone number format (basic)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (
      emailOrPhone &&
      !emailRegex.test(emailOrPhone) &&
      !phoneRegex.test(emailOrPhone)
    ) {
      valid = false;
      newErrors.emailOrPhone = "Invalid email or phone number.";
    }

    // If validation failed, update errors state
    setErrors(newErrors);

    // If all fields are valid, proceed with login logic
    if (valid) {
      const loginData = { emailOrPhone, password };
      console.log("Logging in:", loginData);

      // Reset fields after successful login
      setEmailOrPhone("");
      setPassword("");
      setErrors({ emailOrPhone: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary-midnight-blue">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Login Form */}
      <div className="flex flex-grow items-center justify-center px-4 py-6 text-white">
        <div className="bg-white text-primary-midnight-blue p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-start mb-6">
            <h2 className="text-2xl font-semibold">Login</h2>
          </div>

          {/* Log in with GitHub and Google */}
          <div className="flex space-x-4 mb-4">
            <Button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 flex items-center justify-center shadow">
              <IconBrandFacebook className="mr-2" /> Facebook
            </Button>
            <Button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 flex items-center justify-center shadow">
              <IconBrandGoogle className="mr-2" /> Google
            </Button>
          </div>

          {/* Or continue with email */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form onSubmit={handleLogin}>
            {/* Email or Phone */}
            <label htmlFor="emailOrPhone" className="block text-gray-700 mb-2">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              placeholder="Email@example.com or 1234567890"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 mb-4 ${
                errors.emailOrPhone ? "border-red-500" : ""
              }`}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>
            )}

            {/* Password */}
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 mb-4 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-3 flex  py-2 justify-center cursor-pointer text-gray-500"
              >
                {passwordVisible ? (
                  <IconEyeOff className="  contain-size" />
                ) : (
                  <IconEye className="contain-size" />
                )}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-2 bg-[#384959] text-white rounded-md hover:bg-[#2b3a46] transition"
            >
              Login
            </Button>
          </form>

          {/* Forgot Password and Signup Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Forgot your password?{" "}
              <a
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-600"
              >
                Reset here
              </a>
            </span>
            <br />
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:text-blue-600">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
