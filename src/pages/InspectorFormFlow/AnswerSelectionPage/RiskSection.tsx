import { useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  InspectorFormContext,
  MiniRiskSection,
} from "../../../contexts/InspectorFormContext";

import { AuthContext } from "../../../contexts/AuthContext";

import { temp, tempTwo } from "../../../constants/constants";

interface RiskSectionProps {
  type: string;
}

interface Data {
  correctedDuringInspection: boolean;
  repeatViolation: boolean;
}

export const RiskSection = ({ type }: RiskSectionProps) => {
  const [miniSections, setMiniSections] = useState<MiniRiskSection[]>([]); // use when you want to keep track of user changes
  const { initialForm, setForm } = useContext(InspectorFormContext); // use when saving permanantly

  const [prevAnswers, setPrevAnswers] = useState<Data[]>([]);

  const [state, setState] = useState(0);

  const navigate = useNavigate();
  let questionNum = 0;

  const auth = useContext(AuthContext);

  useEffect(() => {
    switch (type) {
      case "LOW_RISK":
        setState(0);
        if (auth.lowRiskAnswers.length > 0) {
          setPrevAnswers(auth.lowRiskAnswers);
        } else {
          setPrevAnswers(temp);
        }
        return setMiniSections([...initialForm.lowRisk.miniSections]);
      case "HIGH_RISK":
        setState(1);
        if (auth.highRiskAnswers.length > 0) {
          setPrevAnswers(auth.highRiskAnswers);
        } else {
          setPrevAnswers(tempTwo);
        }
        return setMiniSections([...initialForm.highRisk.miniSections]);
    }
  }, []);


  function handleRepeatChange(index: number) {
    console.log(index);
    const temp = prevAnswers;
    temp[index].repeatViolation = !temp[index].repeatViolation;
    setPrevAnswers(temp);
  }

  function handleCorrectedChange(index: number) {
    const temp = prevAnswers;
    temp[index].correctedDuringInspection = !temp[index].correctedDuringInspection;
    setPrevAnswers(temp);
  }

  function SaveData() {
    console.log(prevAnswers);
    console.log(auth.highRiskAnswers);
    alert("Information Saved");
    if (state) {
      auth.setHighRiskAnswers(prevAnswers);
    } else {
      auth.setLowRiskAnswers(prevAnswers);
    }
    navigate("../sectionSelection");
  }

  return (
    <div className="container my-5 py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-1">Number</div>
          <div className="col-5">Title</div>
          <div className="col-2">Repeat Violation</div>
          <div className="col-3">Corrected During Inspection</div>
          <div className="col-1">Points</div>
        </div>
      </div>
      {miniSections.map((miniSection, mainIndex) => (
        <Accordion defaultActiveKey={[`0`]} alwaysOpen>
          <Accordion.Item eventKey={`${mainIndex}`}>
            <Accordion.Header>{miniSection.section}</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                {miniSection.rows.map((row, index) => {
                  questionNum += 1;
                  var g = questionNum - 1;
                  return (
                    <div className="row my-2">
                      <div className="col-1">{questionNum * 100}</div>
                      <div className="col-5">{row.title}</div>
                      <div className="col-2">
                        {
                          prevAnswers[g].repeatViolation && 
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            onClick={() => handleRepeatChange(g)}
                            defaultChecked
                          />
                        }
                        {
                          !prevAnswers[g].repeatViolation && 
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            onClick={() => handleRepeatChange(g)}
                          />
                        }
                      </div>
                      <div className="col-3">
                        {
                          prevAnswers[g].correctedDuringInspection &&
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            defaultChecked
                            onClick={() => handleCorrectedChange(g)}
                          />
                        }
                        {
                          !prevAnswers[g].correctedDuringInspection &&
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            onClick={() => handleCorrectedChange(g)}
                          />
                        }
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
      <div className="row px-2 mt-5 mb-4">
        <div className="d-flex align-items-start col-md-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate("../sectionSelection")}
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
              onClick={() => SaveData()}
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
