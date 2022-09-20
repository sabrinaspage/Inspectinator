import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SectionSelectionPage() {

  const navigate = useNavigate();
  const [sent, isSent] = useState(false);

  function submitData()
  {
    fetch("http://localhost:4000/sectionSelection", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // inspector
        email1: "michaelsalamon78@gmail.com",// CHANGE THIS!
        name1: "Michael Salamon",// CHANGE THIS!
        // client
        email2: "michael37_37@outlook.com",// CHANGE THIS!
        name2: "Michael's Twin"// CHANGE THIS!
      })
    }).then(response => response.json())
    .then(data => {
      console.log("Successful POST signatureRequest!",data);
      isSent(true);
    }).catch((error) => {
      console.log("Unsuccessful POST signatureRequest.",error);
      isSent(false);
    });
  }

  return (
  <div className="d-flex align-items-start col-md-2">
    <h1 className="w-100">
      <button
        onClick={() => {
          submitData();
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