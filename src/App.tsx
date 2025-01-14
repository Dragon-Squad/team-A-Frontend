import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import OTPPage from "./pages/auth/OTPPage";
import AboutUsPage from "./pages/AboutUs";
import PaymentSuccessPage from "./pages/payment/PaymentSuccessPage";
import ProjectDetailsPage from "./pages/project/ProjectDetails";
import ContactUsPage from "./pages/ContactUsPage";
import DashboardView from "./pages/Charity/CharityView";
import DonationRecord from "./components/ui/Charity/Pages/RecentDonations";
import CreateProjectForm from "./components/ui/Charity/Components/CreateProjectForm";
import TestUpdateCharityPage from "./components/ui/Charity/Pages/testpages";
import ProjectsPageDashboard from "./components/ui/Charity/Pages/ProjectsPage";
import CharityDonationStatistic from "./components/ui/Charity/Pages/CharityDonationStatistic";

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
        <Route path="/projects" element={<ProjectsPageDashboard />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/statistics" element={<DonationRecord />} />
        <Route
          path="/statistics_charity"
          element={<CharityDonationStatistic />}
        />
        <Route path="/create-project" element={<CreateProjectForm />} />
        <Route path="/test-api" element={<TestUpdateCharityPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
