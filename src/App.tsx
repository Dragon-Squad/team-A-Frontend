import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RegionPage from "./pages/category/RegionPage";

const OTPPage = React.lazy(() => import("./pages/auth/OTPPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs"));
const PaymentSuccessPage = React.lazy(
  () => import("./pages/payment/PaymentSuccessPage"),
);
const ProjectDetailsPage = React.lazy(
  () => import("./pages/project/ProjectDetails"),
);
const ContactUsPage = React.lazy(() => import("./pages/ContactUsPage"));
const DashboardView = React.lazy(() => import("./pages/Charity/CharityView"));
const DonationRecord = React.lazy(
  () => import("./components/ui/Charity/Pages/RecentDonations"),
);
const CreateProjectForm = React.lazy(
  () => import("./components/ui/Charity/Components/CreateProjectForm"),
);
const TestUpdateCharityPage = React.lazy(
  () => import("./components/ui/Charity/Pages/testpages"),
);
const ProjectsPageDashboard = React.lazy(
  () => import("./components/ui/Charity/Pages/ProjectsPage"),
);
const CharityDonationStatistic = React.lazy(
  () => import("./components/ui/Charity/Pages/CharityDonationStatistic"),
);
const CategoryPage = React.lazy(() => import("./pages/category/CategoryPage"));
const RegionPage = React.lazy(() => import("./pages/category/RegionPage"));

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
        <Route path="/projects/category/:category" element={<CategoryPage />} />
        <Route path="/projects/region/:region" element={<RegionPage />} />
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
