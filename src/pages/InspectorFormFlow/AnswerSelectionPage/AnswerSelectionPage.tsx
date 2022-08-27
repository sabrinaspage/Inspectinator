import { useContext, useEffect, useState } from "react";
import {
  highRiskQuestions,
  lowRiskQuestions,
  UrlsForForm,
} from "../../../constants/constants";
import {
  InspectorFormContext,
  RiskSection,
} from "../../../contexts/InspectorFormContext";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

interface AnswerSelectionProps {
  miniSections: RiskSection[];
}

const AnswerSelection = ({ miniSections }: AnswerSelectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-1">Number</div>
          <div className="col-sm">Title</div>
          <div className="col-2">Repeat Violation</div>
          <div className="col-2">Corrected During Inspection</div>
          <div className="col-1">Points</div>
        </div>
      </div>
      {miniSections.map((miniSection, index) => (
        <Accordion defaultActiveKey={[`0`]} alwaysOpen>
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{miniSection.section}</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                {miniSection.rows.map((row) => (
                  <div className="row">
                    <div className="col-1">{row.number}</div>
                    <div className="col-sm">{row.title}</div>
                    <div className="col-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked={row.repeatViolation}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked={row.correctedDuringInspection}
                      />
                    </div>
                    <div className="col-1">{row.pts}</div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      <div className="row px-2">
        <div className="d-flex align-items-start col-md-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate("/sectionSelection")}
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-100 btn-light bg-light border border-secondary"
            >
              Go Back
            </button>
          </h1>
        </div>
        <div className="col-md-8"></div>
        <div className="d-flex align-items-start col-md-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate("#")}
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-100 btn-dark bg-dark"
            >
              Save
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

const getUrlPath = () => {
  if (window.location.pathname === UrlsForForm.lowRiskSection) {
    require("./blueAccordion.css");
    return "LOW_RISK";
  }
  if (window.location.pathname === UrlsForForm.highRiskSection) {
    require("./redAccordion.css");
    return "HIGH_RISK";
  }
  return "";
};

export default function AnswerSelectionPage() {
  const { initialForm, setForm } = useContext(InspectorFormContext);
  const [path, setPath] = useState("");

  useEffect(() => {
    const riskSectionPath = getUrlPath();
    setPath(riskSectionPath);
    switch (path) {
      case "LOW_RISK":
        return setForm({
          ...initialForm,
          lowRisk: {
            miniSections: [...lowRiskQuestions],
          },
        });
      case "HIGH_RISK":
        return setForm({
          ...initialForm,
          highRisk: {
            miniSections: [...highRiskQuestions],
          },
        });
    }
  }, [path]);

  switch (path) {
    case "LOW_RISK":
      return (
        <AnswerSelection miniSections={initialForm.lowRisk.miniSections} />
      );
    case "HIGH_RISK":
      return (
        <AnswerSelection miniSections={initialForm.highRisk.miniSections} />
      );
  }

  return null;
}
