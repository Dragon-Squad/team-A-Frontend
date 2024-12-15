import React from "react";
import { AuthForm } from "../../components/auth/authform";
import { Card } from "../../components/ui/card";
import Logo from "../../components/logo";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Logo type={"logo1"} width={300} height={240} />
        </div>
        <AuthForm mode="login" />
      </Card>
    </div>
  );
};

export default LoginPage;
