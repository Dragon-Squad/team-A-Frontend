import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPage from "./pages/auth/ForgotPassword";

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
        <Route path="/login" element={<ForgotPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
