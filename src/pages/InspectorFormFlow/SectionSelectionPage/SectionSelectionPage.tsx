import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InspectorFormSection,
  inspectorFormSections,
  SectionStatus,
} from "./consts";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";
import "./SectionSelectionPage.css";
import { Pill } from "../../../recycleComps/Pill";

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
            <a href={url}>
              <button
                style={{ borderRadius: "8px" }}
                className="btn p-2 w-25 btn-dark bg-dark"
              >
                Start
              </button>
            </a>
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
                onClick={() => navigate("/esign")}
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
