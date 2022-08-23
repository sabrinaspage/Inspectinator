
import "./dashboard.css";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DocumentComp from "../documentComps/DocumentComp";

import { DocumentStatus } from "../documentComps/DocumentComp";
import { useRef, useState } from "react";

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

  var documents = [
    {
      "name" : "Inspection_report_name",
      "restaurant" : "Dominos"
    },
    {
      "name" : "Random_name",
      "restaurant" : "Pizza hut"
    },
    {
      "name" : "Recipt_from_yesterday",
      "restaurant" : "McDonalds"
    },
    {
      "name" : "Times Square Inspection",
      "restaurant" : "Burger King"
    }
  ];

  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const searchRef = useRef<HTMLInputElement>(null);


  function searchClick() {
    var temp = searchRef.current?.value;
    if (temp === undefined) {
      temp = "";
    }


    if (temp === null || temp === "") {
      setFilteredDocuments(documents);
    } else {
      var filteredData = [];
      for (let i = 0; i < documents.length; i++) {
        if (documents[i]['name'].includes(temp) || documents[i]['restaurant'].includes(temp)) {
          filteredData.push(documents[i])
        }
      }
      console.log(filteredData);
      setFilteredDocuments(filteredData);
    }
  }



  const navigate = useNavigate();
  return (
    <div className="container-fluid vh-80">
      <div className="container" style={{marginTop: "9vh", marginBottom: "15vh"}}>
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
                type="search"
                className="text-secondary simpleSearchbar col-lg-10 y-2 px-2"
                placeholder=""
                onKeyUp={searchClick}
                ref= {searchRef}
                data-search
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
            {filteredDocuments.map((value, index) => (
                <DocumentComp filename={value.name} restaurantName={value.restaurant}
                  createdDate="12-01-2022" documentstatus={run(index)}/>  
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
