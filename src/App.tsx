import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

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
        <Route path="/register" element={<AuthForm mode="register" />} />
        <Route path="/login" element={<AuthForm mode="login" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
