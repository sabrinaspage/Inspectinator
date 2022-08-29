import { Route, Routes, useLocation } from "react-router-dom";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import SectionSelectionPage from "./pages/InspectorFormFlow/SectionSelectionPage/SectionSelectionPage";
import AnswerSelectionPage from "./pages/InspectorFormFlow/AnswerSelectionPage/AnswerSelectionPage";
import EsignaturePage from "./pages/InspectorFormFlow/EsignaturePage/EsignaturePage";
import Dashboard from "./pages/Dashboard/mainDashboard/Dashboard";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";
import { UrlsForForm } from "./constants/constants";

export default function MainCompenent() {
  const location = useLocation();

  const [control, setControl] = useState(0);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setControl(1);
    } else {
      setControl(0);
    }
  }, [location]);

  const auth = useContext(AuthContext);

  return (
    <div
      style={
        control === 0
          ? {
              flexGrow: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : { flexGrow: "1", display: "flex", justifyContent: "center" }
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/sectionSelection" element={<SectionSelectionPage />} />
        <Route path="/esign" element={<EsignaturePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path={UrlsForForm.basicInfoSection} element={<AnswerSelectionPage />} />
        <Route
          path={UrlsForForm.highRiskSection}
          element={<AnswerSelectionPage />}
        />
        <Route
          path={UrlsForForm.lowRiskSection}
          element={<AnswerSelectionPage />}
        />
        {auth.loggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </div>
  );
}
