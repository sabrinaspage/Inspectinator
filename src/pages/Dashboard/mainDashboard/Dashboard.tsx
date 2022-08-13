
import "./dashboard.css";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DocumentComp from "../documentComps/DocumentComp";

import { DocumentStatus } from "../documentComps/DocumentComp";

function run(a: number) {
  if (a % 3 === 0) {
    return DocumentStatus.Progress;
  } else if (a % 3 === 1) {
    return DocumentStatus.Signed;
  } else {
    return DocumentStatus.Declined;
  }
  
}

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="container vh-100" style={{marginTop: "20vh"}}>
      <div className="row px-2">
        <div className="col-lg-7">
          <h1 className="fw-bold">Reports</h1>
          <p className="mt-3 fs-6 text-black-50">
            All document relating to your inspections are stored here.
          </p>
        </div>
        <div className="col-lg-2">
          <h1 className="p-0 mt-3 row">
            <p className="fs-5 mb-2 col-lg-2">
              <RiSearch2Line />
            </p>
            <input
              style={{ fontSize: "0.95rem" }}
              type="text"
              className="text-secondary simpleSearchbar col-lg-10 y-2 px-2"
              placeholder=""
            ></input>
          </h1>
          <div style={{ height: "1px" }} className="divider bg-secondary"></div>
        </div>
        <div className="col-lg-1"></div>
        <div className="d-flex align-items-start col-lg-2">
          <h1 className="w-100">
            <button
              onClick={() => navigate("/sectionSelection")}
              style={{ borderRadius: "8px" }}
              className="btn p-2 w-100 btn-dark bg-dark"
            >
              Create Document
            </button>
          </h1>
        </div>
      </div>
      <div className="divider"></div>
      <div className="mt-5 pt-3 h-50">
        <div className="row px-2">
          <div className="col-lg-8 text-uppercase">
            <p className="text-secondary">
              <small>inpsection report name</small>
            </p>
          </div>
          <div className="col-lg-2 text-uppercase">
            <p className="text-secondary">
              <small>created by</small>
            </p>
          </div>
          <div className="col-lg-2 text-uppercase">
            <p className="text-secondary">
              <small>status</small>
            </p>
          </div>
        </div>
        <div style={{ height: "1px" }} className="bg-secondary mt-3 mx-2"></div>
        <div className="mt-5">
          {Array(12)
            .fill(0)
            .map((value, index) => (
              <DocumentComp filename="Inspection_report_nam" restaurantName="Dominos Pizza, Times Square" 
                createdDate="12-01-2022" documentstatus={run(index)}/>  
            )
          )}
        </div>
      </div>
    </div>
  );
}
