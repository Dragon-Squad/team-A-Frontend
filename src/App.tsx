import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { AuthForm } from "./components/auth/authform";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<AuthForm mode="register" />} />
      <Route path="/login" element={<AuthForm mode="login" />} />
    </Routes>
  );
};

export default App;
