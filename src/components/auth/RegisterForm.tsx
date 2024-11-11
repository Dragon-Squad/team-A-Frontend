import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react"; // Icons from Tabler
import { Button } from "../ui/button";
import NavigationBar from "../ui/navigation-bar";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    // Basic validation for empty fields
    if (!email || !phone || !password || !confirmPassword) {
      valid = false;
      if (!email) newErrors.email = "Email is required.";
      if (!phone) newErrors.phone = "Phone number is required.";
      if (!password) newErrors.password = "Password is required.";
      if (!confirmPassword)
        newErrors.confirmPassword = "Please confirm your password.";
    }

    // Ensure the password and confirm password match
    if (password !== confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Validate email format (basic)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      valid = false;
      newErrors.email = "Invalid email address.";
    }

    // Validate phone number format (basic)
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    if (phone && !phoneRegex.test(phone)) {
      valid = false;
      newErrors.phone = "Invalid phone number.";
    }

    // If validation failed, update errors state
    setErrors(newErrors);

    // If all fields are valid, proceed with registration logic
    if (valid) {
      const registerData = { email, phone, password };
      console.log("Registering:", registerData);

      // Reset fields after successful registration
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setErrors({ email: "", phone: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary-midnight-blue">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Register Form */}
      <div className="flex flex-grow items-center justify-center px-4 py-6 text-white">
        <div className="bg-white text-primary-midnight-blue p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-start mb-6">
            <h2 className="text-2xl font-semibold">Create Account</h2>
          </div>

          {/* GitHub and Google Login */}
          <div className="flex space-x-4 mb-4">
            <Button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 flex items-center justify-center shadow">
              <IconBrandGithub className="mr-2" /> GitHub
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

          {/* Input Fields */}
          <form onSubmit={handleRegister}>
            {/* Email */}
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 mb-4 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Phone */}
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md  bg-white focus:ring-2 focus:ring-blue-500 mb-4 ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
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
                className={`w-full px-4 py-2 border border-gray-300 rounded-md  bg-white focus:ring-2 focus:ring-blue-500 mb-4 ${errors.password ? "border-red-500" : ""}`}
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              >
                {passwordVisible ? <IconEyeOff /> : <IconEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-2 border border-gray-300  bg-white rounded-md focus:ring-2 focus:ring-blue-500 mb-4 ${errors.confirmPassword ? "border-red-500" : ""}`}
              />
              <span
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              >
                {confirmPasswordVisible ? <IconEyeOff /> : <IconEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-2 bg-[#384959] text-white rounded-md hover:bg-[#2b3a46] transition"
            >
              Create Account
            </Button>
          </form>

          {/* Already have an account? */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-600">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
