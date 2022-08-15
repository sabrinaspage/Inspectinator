import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SectionSelectionPage from "./pages/InspectorFormFlow/SectionSelectionPage/SectionSelectionPage";
import AnswerSelectionPage from "./pages/InspectorFormFlow/AnswerSelectionPage/AnswerSelectionPage";
import EsignaturePage from "./pages/InspectorFormFlow/EsignaturePage/EsignaturePage";
import Dashboard from "./pages/Dashboard/mainDashboard/Dashboard";
import InspectorFormProvider from "./contexts/InspectorFormContext";

import Navbar from "./recycleComps/NavBarComp/NavBar";
import Footer from "./recycleComps/footerComps/Footer";

function App() {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <InspectorFormProvider>
        <Navbar />
        <div style={{flexGrow: '1'}}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signIn" element={<SignInPage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/sectionSelection" element={<SectionSelectionPage />} />
              <Route path="/answerSelection" element={<AnswerSelectionPage />} />
              <Route path="/eSign" element={<EsignaturePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
          </div>
        <Footer />
      </InspectorFormProvider>
    </div>
  );
}

export default App;
