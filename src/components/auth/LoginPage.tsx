import React from "react";
import { AuthForm } from "./authform";

const LoginPage = () => {
  return (
    <div>
      <AuthForm
        mode="login"
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
      />
    </div>
  );
};

export default LoginPage;
