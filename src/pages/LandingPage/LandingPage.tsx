import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <button onClick={() => navigate("/sectionSelection")}>hey</button>
    </header>
  );
}
