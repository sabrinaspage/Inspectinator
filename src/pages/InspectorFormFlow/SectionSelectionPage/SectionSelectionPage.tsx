import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  InspectorFormSection,
  inspectorFormSections,
  SectionStatus,
} from "./consts";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";
import "./SectionSelectionPage.css";
import { Pill } from "../../../recycleComps/Pill";

import { AuthContext } from "../../../contexts/AuthContext";

const Section = ({
  collapseId,
  headingId,
  status,
  title,
  description,
  url,
}: InspectorFormSection) => {
  const sectionStatus =
    status === SectionStatus.NOT_STARTED ? (
      <Pill title="Not Started" color="#FEF3F2" textColor="#F04438" />
    ) : (
      <Pill title="Saved" color="#ECFDF3" textColor="#12B76A" />
    );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
          style={{ height: "115px" }}
        >
          {title} {sectionStatus}
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={headingId}
        data-bs-parent="#accordionFlushExample"
        style={{ height: "100px" }}
      >
        <div className="accordion-body">
          {description}
          <p />
          {status === SectionStatus.NOT_STARTED ? (
            <Link to={url}>
              <button
                style={{ borderRadius: "8px" }}
                className="btn p-2 w-25 btn-dark bg-dark"
              >
                Start
              </button>
            </Link>
          ) : (
            <button
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-100 btn-dark bg-dark"
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SectionSelectionPage() {
  const navigate = useNavigate();
  const inspector = useContext(InspectorFormContext);

  const auth = useContext(AuthContext);

  useEffect(() => {
    console.log(auth.basicInformation);
    console.log(auth.highRiskAnswers);  
  }, [inspector]);

  async function saveDocument() {

    const data = {
      requestId : "",
      signOneId : "",
      signTwoId : "",
      statusOne : "",
      statusTwo : "",
    }

    const documentInfo = { 
      basicInformation : auth.basicInformation,
      highRisk : auth.highRiskAnswers,
      lowRisk : auth.lowRiskAnswers,
      signatureRequestData : data,
      userId : auth.userId
    };

    console.log(documentInfo);
 
    await fetch("http://localhost:5000/document/addDoc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
       },
        body: JSON.stringify(documentInfo),
    })
    .then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      } else {
        console.log(response);
        window.alert("Document saved successfully!");
      }
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
  }

  return (
    <div className="w-100 mb-5 pb-4">
      <div className="mt-5 container">
        <div className="row px-2">
          <div className="col-md-10">
            <h1 className="fw-bold">Health Inspection Form</h1>
            <p className="mt-3 fs-6 text-black-50">Fill in each section.</p>
          </div>
        </div>
        <div className="row px-2">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {inspectorFormSections.map((section, id) => (
              <Section key={id} {...{ ...section }} />
            ))}
          </div>
        </div>
        <div className="row px-2 pt-3">
          <div className="d-flex align-items-start col-md-2">
            <h1 className="w-100">
              <button
                onClick={() => navigate("/dashboard")}
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
                onClick={() => saveDocument()}
                style={{ borderRadius: "8px" }}
                className="btn p-2 w-100 btn-dark bg-dark"
              >
                Review and Sign
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
