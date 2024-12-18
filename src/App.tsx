import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/landing/LandingPage"));
const LoginPage = React.lazy(() => import("./pages/auth/SignInPage"));
const RegisterPage = React.lazy(() => import("./pages/auth/SignUpPage"));
const ForgotPage = React.lazy(() => import("./pages/auth/ForgotPassword"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
