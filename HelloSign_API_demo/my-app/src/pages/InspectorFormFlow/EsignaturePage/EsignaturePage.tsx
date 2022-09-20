import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function EsignaturePage() {
  const navigate = useNavigate();
  // All values displayed to the user
  const [request_id, setReq] = useState("");
  // inspector
  const [Iemail, setIemail] = useState("");
  const [Iname, setIname] = useState("");
  const [Irole, setIrole] = useState("");
  const [Isign_id, setIsign_id] = useState("");
  const [Istatus, setIstatus] = useState("");
  // client
  const [Cemail, setCemail] = useState("");
  const [Cname, setCname] = useState("");
  const [Crole, setCrole] = useState("");
  const [Csign_id, setCsign_id] = useState("");
  const [Cstatus, setCstatus] = useState("");

  // If both status keys have an associated value "Complete!", complete is true
  const [complete, isComplete] = useState(false);
  // Only update isComplete(true) once
  const [once, isOnce] = useState(false);

  // When the html text after "status: " changes, this code will run
  useEffect(() => {
    if(Istatus==="Complete!" && Cstatus==="Complete!" && once===false)
    {
      console.log("Both parties submitted e-signatures. Inspection process complete!");
      isComplete(true);
      isOnce(true);
    }
  });

  async function getData() {
    const response = await fetch('http://localhost:4000/esign');
    let body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    else
    {
      setReq(body.request_id);
      // inspector
      setIemail(body.inspector.email);
      setIname(body.inspector.name);
      setIrole(body.inspector.role);
      setIsign_id(body.inspector.sign_id);
      setIstatus(body.inspector.status);
      // client
      setCemail(body.client.email);
      setCname(body.client.name);
      setCrole(body.client.role);
      setCsign_id(body.client.sign_id);
      setCstatus(body.client.status);
    }
  };


  return (
  <div className="col-md-7">
    <h1 className="w-100">
      <button
          onClick={() => {
            try {
              getData();
              console.log("Successfully obtained signature request values!");
            }
            catch(error) {
              console.log(error);
            }
          }}
          style={{ borderRadius: "8px" }}
          className="btn p-2 w-100 btn-dark bg-dark"
          disabled={complete}
        >
          Refresh
      </button>
    </h1>
    <p>
      requestID: {request_id}
    </p>
    <p>
      name: {Iname}<br/>
      role: {Irole}<br/>
      email: {Iemail}<br/>
      signID: {Isign_id}<br/>
      <strong>status</strong>: {Istatus}
    </p>
    <p>
      name: {Cname}<br/>
      role: {Crole}<br/>
      email: {Cemail}<br/>
      signID: {Csign_id}<br/>
      <strong>status</strong>: {Cstatus}
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