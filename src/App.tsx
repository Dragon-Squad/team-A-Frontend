import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import RegisterForm from "./components/auth/RegisterForm";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default App;
