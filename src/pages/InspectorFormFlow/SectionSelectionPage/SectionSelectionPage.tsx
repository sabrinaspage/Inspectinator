import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InspectorFormSection,
  inspectorFormSections,
  SectionStatus,
} from "./consts";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";
import "./SectionSelectionPage.css";

const Section = ({
  collapseId,
  headingId,
  status,
  title,
  description,
}: InspectorFormSection) => {
  const sectionStatus =
    status === SectionStatus.NOT_STARTED ? (
      <span className="text-danger ps-1">(not started)</span>
    ) : (
      <span className="text-success">(saved)</span>
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
          style={{ height: "100px" }}
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
            <button
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-25 btn-dark bg-dark"
            >
              Start
            </button>
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

  useEffect(() => {
    console.log(inspector.initialForm);
  }, [inspector]);

  return (
    <div className="mt-5 container">
      <div className="row px-2">
        <div className="col-md-10">
          <h1 className="fw-bold">Inspection Form</h1>
          <p className="mt-3 fs-6 text-black-50">Fill in each section</p>
        </div>
        <div className="d-flex align-items-start col-md-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate("/dashboard")}
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-100 btn-dark bg-dark"
            >
              Go back
            </button>
          </h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {inspectorFormSections.map((section, id) => (
            <Section key={id} {...{ ...section }} />
          ))}
        </div>
      </div>
    </div>
  );
}
