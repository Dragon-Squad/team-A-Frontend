import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/landing/LandingPage"));
const LoginPage = React.lazy(() => import("./pages/auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/auth/RegisterPage"));
const ForgotPage = React.lazy(() => import("./pages/auth/ForgotPassword"));

const AuthForm = React.lazy(() =>
  import("./components/auth/authform").then((module) => ({
    default: module.AuthForm,
  })),
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
