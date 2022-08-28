import { useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  InspectorFormContext,
  MiniRiskSection,
} from "../../../contexts/InspectorFormContext";

interface RiskSectionProps {
  type: string;
}

export const RiskSection = ({ type }: RiskSectionProps) => {
  const [miniSections, setMiniSections] = useState<MiniRiskSection[]>([]); // use when you want to keep track of user changes
  const { initialForm, setForm } = useContext(InspectorFormContext); // use when saving permanantly
  const navigate = useNavigate();
  let questionNum = 0;

  useEffect(() => {
    switch (type) {
      case "LOW_RISK":
        return setMiniSections([...initialForm.lowRisk.miniSections]);
      case "HIGH_RISK":
        return setMiniSections([...initialForm.highRisk.miniSections]);
    }
  }, []);

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
                {miniSection.rows.map((row, index) => {
                  questionNum += 1;
                  return (
                    <div className="row">
                      <div className="col-1">{questionNum * 100}</div>
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
                  );
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      <div className="row px-2">
        <div className="d-flex align-items-start col-md-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate(-1)}
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
              onClick={() => navigate(-1)}
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
