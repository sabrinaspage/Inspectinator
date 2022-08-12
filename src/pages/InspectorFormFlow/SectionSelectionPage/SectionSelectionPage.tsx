import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { inspect } from "util";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";

interface SectionProps {
  title: string;
  handleClick?: () => void;
}

const Section = ({ title, handleClick }: SectionProps) => (
  <div className="col-sm-6 pb-2">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a onClick={handleClick} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);

export default function SectionSelectionPage() {
  const navigate = useNavigate();
  const inspector = useContext(InspectorFormContext);

  useEffect(() => {
    console.log(inspector.initialForm);
  }, [inspector]);

  return (
    <div className="container pt-2">
      <button
        onClick={() =>
          inspector.setForm({ ...inspector.initialForm, hi: "yo" })
        }
      >
        hi
      </button>
      <div className="row">
        <Section title="Basic Info" handleClick={() => navigate("/")} />
        <Section
          title="Red High Risk Factors"
          handleClick={() => navigate("/")}
        />
      </div>
      <div className="row">
        <Section
          title="Blue Low Risk Factors"
          handleClick={() => navigate("/")}
        />
        <Section title="Esignature" handleClick={() => navigate("/")} />
      </div>
    </div>
  );
}
