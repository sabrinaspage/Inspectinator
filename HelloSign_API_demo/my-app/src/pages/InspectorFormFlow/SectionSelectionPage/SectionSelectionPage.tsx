import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SectionSelectionPage() {
  const navigate = useNavigate();
  const [sent, isSent] = useState(false);

  return (
  <div className="d-flex align-items-start col-md-2">
    <h1 className="w-100">
      <button
        onClick={() => {
          isSent(true);
          console.log("Successful POST signatureRequest!");
        }}
        style={{ borderRadius: "8px" }}
        className="btn p-2 w-100 btn-dark bg-dark"
        disabled={sent}
      >
        Review and Sign
      </button>
      <button
        onClick={() => {
          console.log("Redirecting to /esign");
          navigate("/esign");
        }}
        style={{ borderRadius: "8px" }}
        className="btn p-2 w-100 btn-dark bg-dark"
        disabled={!sent}
      >
        Check Status
      </button>
    </h1>
  </div>
  );
}