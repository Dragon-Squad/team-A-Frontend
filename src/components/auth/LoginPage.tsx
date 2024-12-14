import React from "react";
import { AuthForm } from "./authform";
import { Card } from "../ui/card";
import Logo from "../logo";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Logo type={"logo1"} size={""} />
        <AuthForm mode="login" className="w-full" />
      </Card>
    </div>
  );
};

export default LoginPage;
