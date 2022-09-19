import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function EsignaturePage() {
  const navigate = useNavigate();
  // Store boolean values for status to make a boolean expression in useEffect()
  const [status, setStatus] = useState({
    status1: false,
    status2: false
  });
  // Convert boolean values to something more user-friendly
  const statusText= ["Incomplete.","Complete!"];
  // If both status keys have an associated value true, complete is true
  const [complete, isComplete] = useState(false);
  // Only update isComplete(true) once
  const [once, isOnce] = useState(false);

  // When the html text after "status: " changes, this code will run
  useEffect(() => {
    if(status.status1===true && status.status2===true && once===false)
    {
      console.log("Both parties submitted e-signatures. Inspection process complete!");
      isComplete(true);
      isOnce(true);
    }
  });

  return (
  <div className="col-md-5">
    <h1 className="w-100">
      <button
          onClick={() => {
            setStatus({
              status1: true,
              status2: true
            });
            console.log("Successfully obtained signature request values!");
          }}
          style={{ borderRadius: "8px" }}
          className="btn p-2 w-100 btn-dark bg-dark"
          disabled={complete}
        >
          Refresh
      </button>
    </h1>
    <p>
      reqID: 2398huu99342h98hu9hu9j823n9398j
    </p>
    <p>
      Name: Michael Salamon<br/>
      Role: Inspector<br/>
      Email: michaelsalamon78@gmail.com<br/>
      signID: 3909bd983b98db93<br/>
      <strong>status</strong>: {statusText[Number(status.status1)]}
    </p>
    <p>
      Name: Michael's Twin<br/>
      Role: Restaurant Owner<br/>
      Email: michael37_37@outlook.com<br/>
      signID: 7363822hdnj8392b8<br/>
      <strong>status</strong>: {statusText[Number(status.status2)]}
    </p>
    <h1 className="w-100">
      <button
        onClick={() => {
          console.log("Redirecting to /dashboard");
          navigate("/dashboard");
        }}
        style={{ borderRadius: "8px" }}
        className="btn p-2 w-100 btn-dark bg-dark"
        disabled={!complete}
      >
        Success! Go Home.
      </button>
    </h1>
  </div>
  );
}