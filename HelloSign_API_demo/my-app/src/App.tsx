import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionSelectionPage from "./pages/InspectorFormFlow/SectionSelectionPage/SectionSelectionPage";
import EsignaturePage from "./pages/InspectorFormFlow/EsignaturePage/EsignaturePage";
import Dashboard from "./pages/Dashboard/mainDashboard/Dashboard";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Router>
        <Routes>
          <Route path="/sectionSelection" element={<SectionSelectionPage />} />
          <Route path="/esign" element={<EsignaturePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
