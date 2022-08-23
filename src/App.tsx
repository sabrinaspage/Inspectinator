import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import InspectorFormProvider from "./contexts/InspectorFormContext";

import Navbar from "./recycleComps/NavBarComp/NavBar";
import MainCompenent from "./MainComponent";
import Footer from "./recycleComps/footerComps/Footer";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <AuthContextProvider>
        <InspectorFormProvider>
          <Router>
            <Navbar />
            <MainCompenent />
            <Footer />
          </Router>
        </InspectorFormProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
