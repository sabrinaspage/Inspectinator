import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionSelectionPage from "./pages/InspectorFormFlow/SectionSelectionPage/SectionSelectionPage";
import EsignaturePage from "./pages/InspectorFormFlow/EsignaturePage/EsignaturePage";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Router>
        <Routes>
          <Route path="/sectionSelection" element={<SectionSelectionPage />} />
          <Route path="/esign" element={<EsignaturePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
