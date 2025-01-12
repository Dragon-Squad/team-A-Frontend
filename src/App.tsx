import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import OTPPage from "./pages/auth/OTPPage";
import AboutUsPage from "./pages/AboutUs";
import PaymentSuccessPage from "./pages/payment/PaymentSuccessPage";
import ProjectDetailsPage from "./pages/project/ProjectDetails";
import ProjectsPage from "./pages/project/ProjectPage";
import ContactUsPage from "./pages/ContactUsPage";
import DashboardView from "./pages/Charity/CharityView";
import DonationRecord from "./components/ui/Charity/Pages/RecentDonations";
import CreateProjectForm from "./components/ui/Charity/Components/CreateProjectForm";

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
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/details/:id" element={<ProjectDetailsPage />} />
        <Route path="/success" element={<PaymentSuccessPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/donations" element={<DonationRecord />} />
        <Route path="/create-project" element={<CreateProjectForm />} />
      </Routes>
    </Suspense>
  );
};

export default App;
