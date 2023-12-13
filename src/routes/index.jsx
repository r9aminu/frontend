import { BrowserRouter, Route, Routes } from "react-router-dom";

// Existing page imports
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ResultsPage from "../pages/results";
import CategoryPage from "../pages/categories";
import FAQPage from "../pages/faq";
import ContactUsPage from "../pages/contact";
import ReportStreetCrisisPage from "../pages/report-crisis";
import TermsPage from "../pages/terms";
import PrivacyPage from "../pages/privacy";

// New import for EmailForm
import EmailForm from "../pages/emailform";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/resources" element={<ResultsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/report-crisis" element={<ReportStreetCrisisPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* New route for the EmailForm */}
        <Route path="/email-form" element={<EmailForm />} />
      </Routes>
    </BrowserRouter>
  );
}
