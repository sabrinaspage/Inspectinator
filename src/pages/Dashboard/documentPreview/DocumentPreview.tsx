
import { useParams, useNavigate } from 'react-router-dom';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from 'react';
import { Accordion } from "react-bootstrap";

import './DocumentPreview.css';
import { AuthContext } from '../../../contexts/AuthContext';

import {
    InspectorFormContext,
    MiniRiskSection,
  } from "../../../contexts/InspectorFormContext";


export default function DocumentPreview() {

    const navigate = useNavigate();

    const { documentId } = useParams();

    const auth = useContext(AuthContext);
    const { initialForm, setForm } = useContext(InspectorFormContext); 

    const [changed, setchanged] = useState(false);

    useEffect(() => {
        setLowRisk([...initialForm.lowRisk.miniSections]);
        setHighRisk([...initialForm.highRisk.miniSections]);
        if (changed === false) {
            fetchData();
        }
        setData([]);
    }, [changed]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/document/data/' + documentId, {
            method: "GET",
        });
        const records = await response.json();
        setData(records);
        console.log(records[0]);
        console.log(records[0].basicInformation[0]);
        console.log(data);
        console.log(records[0].highRisk[0].repeatViolation);

        setchanged(true);
    } 
    
    const [data, setData] = useState<any[]>([]);
    const [lowRisk, setLowRisk] = useState<any[]>([]);
    const [highRisk, setHighRisk] = useState<any[]>([]);

    let questionNum = 0;
    let questionNum2 = 0;

    if (data.length === 0) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='container-fluid my-5 pt-3 pb-5'>
            <div className="container">
                <h2 className="fw-bold">Document Preview</h2>
                <div className='mt-5'>
                    <h4 className="fw-bold">Basic Information</h4>
                    <hr></hr>
                    <div className='mt-4'>
                        <div className='box'>
                            <div>
                                <p className="m-0 text-primary fw-bold">Business Name</p>
                                <h5 className='mt-2 pt-1 text-secondary fw-bold'>{data[0].basicInformation[0].businessName}</h5>
                            </div>
                            <div>
                                <p className="m-0 text-primary fw-bold">Operator</p>
                                <h5 className='mt-2 pt-1 text-secondary fw-bold'>{data[0].basicInformation[0].operator}</h5>
                            </div>
                            <div>
                                <p className="m-0 text-primary fw-bold">Address</p>
                                <h5 className='mt-2 pt-1 text-secondary fw-bold'>{data[0].basicInformation[0].address}, {data[0].basicInformation[0].city}, {data[0].basicInformation[0].zipCode}</h5>
                            </div>
                            <div>
                                <p className="m-0 text-primary fw-bold">Phone Number</p>
                                <h5 className='mt-2 pt-1 text-secondary fw-bold'>{data[0].basicInformation[0].phoneNumber}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 pt-4'>
                    <h4 className="fw-bold">High Risk Factors</h4>
                    <i>High Risk Factors are improper practices or procedures identified as the most prevalent contributing factors of foodborne illness or injury.</i>
                    <hr></hr>
                    <div>
                        <div className="row mt-5 mb-4">
                            <div className="col-1">Number</div>
                            <div className="col-5">Title</div>
                            <div className="col-2">Repeat Violation</div>
                            <div className="col-3">Corrected During Inspection</div>
                            <div className="col-1">Points</div>
                        </div>

                        {highRisk.map((miniSection, mainIndex) => (
                            <Accordion defaultActiveKey={[`0`]} alwaysOpen>
                            <Accordion.Item eventKey={`${mainIndex}`}>
                                <Accordion.Header>{miniSection.section}</Accordion.Header>
                                <Accordion.Body>
                                <div className="container">
                                    {miniSection.rows.map((row: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; pts: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
                                    questionNum += 1;
                                    var g = questionNum - 1;
                                    console.log(g);
                                    return (
                                        <div className="row my-2">
                                        <div className="col-1">{questionNum * 100}</div>
                                        <div className="col-5">{row.title}</div>
                                        <div className="col-2">
                                            {data[0].highRisk[questionNum - 1].repeatViolation && <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                disabled
                                                checked
                                            />}
                                            {!data[0].highRisk[questionNum - 1].repeatViolation && <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                disabled
                                            />}
                                        </div>
                                        <div className="col-3">
                                            {data[0].highRisk[questionNum - 1].correctedDuringInspection && <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                disabled
                                                checked
                                            />}
                                            {!data[0].highRisk[questionNum - 1].correctedDuringInspection && <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                disabled
                                            />}
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
                    </div>
                </div>

                <div className='mt-5 pt-4'>
                    <h4 className="fw-bold">Low Risk Factors</h4>
                    <i>Low Risk Factors are preventive measures to control the addition of pathogens, chemicals, and physical objects into foods.</i>
                    <hr></hr>
                    
                    <div className="row mt-5 mb-4">
                        <div className="col-1">Number</div>
                        <div className="col-5">Title</div>
                        <div className="col-2">Repeat Violation</div>
                        <div className="col-3">Corrected During Inspection</div>
                        <div className="col-1">Points</div>
                    </div>

                    {lowRisk.map((miniSection, mainIndex) => (
                        <Accordion defaultActiveKey={[`0`]} alwaysOpen>
                        <Accordion.Item eventKey={`${mainIndex}`}>
                            <Accordion.Header>{miniSection.section}</Accordion.Header>
                            <Accordion.Body>
                            <div className="container">
                                {miniSection.rows.map((row: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; pts: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
                                questionNum2 += 1;
                                var g = questionNum2 - 1;
                                console.log(g);
                                return (
                                    <div className="row my-2">
                                    <div className="col-1">{questionNum2 * 100}</div>
                                    <div className="col-5">{row.title}</div>
                                    <div className="col-2">
                                        {data[0].highRisk[questionNum2 - 1].repeatViolation && <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            disabled
                                            checked
                                        />}
                                        {!data[0].highRisk[questionNum2 - 1].repeatViolation && <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            disabled
                                        />}
                                    </div>
                                    <div className="col-3">
                                        {data[0].highRisk[questionNum2 - 1].correctedDuringInspection && <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            disabled
                                            checked
                                        />}
                                        {!data[0].highRisk[questionNum2 - 1].correctedDuringInspection && <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            disabled
                                        />}
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
                    
                </div>

                <div className='mt-5 pt-4'>
                    <h4 className="fw-bold">E-signature Status</h4>
                    <hr></hr>
                    <div className='mt-4'>
                        <div className='box'>
                            <div>
                                <p className="m-0 text-primary fw-bold">{auth.userEmail}</p>
                                {data[0].signatureRequestData.statusOne === "Complete" && 
                                    <div
                                        style={{
                                        borderRadius: "30px",
                                        backgroundColor: "#ECFDF3",
                                        width: "20%",
                                        }}
                                        className="py-1 px-3 mt-3 pt-1 w-20 text-center"
                                    >
                                        <p
                                        style={{ color: "#12B76A", fontWeight: "500" }}
                                        className="m-0 p-1"
                                        >
                                        <small>Signed</small>
                                        </p>
                                    </div>
                                }
                                {
                                    data[0].signatureRequestData.statusOne === "" &&
                                    <div
                                        style={{
                                        borderRadius: "30px",
                                        backgroundColor: "#FEF3F2",
                                        width: "20%",
                                        }}
                                        className="py-1 px-3 mt-3 pt-1 w-20 text-center"
                                    >
                                        <p
                                        style={{ color: "#F04438", fontWeight: "500" }}
                                        className="m-0"
                                        >
                                        <small>Not Signed</small>
                                        </p>
                                    </div>
                                }
                            </div>
                            <div>
                                <p className="m-0 text-primary fw-bold">{data[0].basicInformation[0].businessName}</p>
                                {data[0].signatureRequestData.statusTwo === "Complete" && 
                                    <div
                                        style={{
                                        borderRadius: "30px",
                                        backgroundColor: "#ECFDF3",
                                        width: "20%",
                                        }}
                                        className="py-1 px-3 mt-3 pt-1 w-20 text-center"
                                    >
                                        <p
                                        style={{ color: "#12B76A", fontWeight: "500" }}
                                        className="m-0 p-1"
                                        >
                                        <small>Signed</small>
                                        </p>
                                    </div>
                                }
                                {
                                    data[0].signatureRequestData.statusTwo === "" &&
                                    <div
                                        style={{
                                        borderRadius: "30px",
                                        backgroundColor: "#FEF3F2",
                                        width: "20%",
                                        }}
                                        className="py-1 px-3 mt-3 pt-1 w-20 text-center"
                                    >
                                        <p
                                        style={{ color: "#F04438", fontWeight: "500" }}
                                        className="m-0"
                                        >
                                        <small>Not Signed</small>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="mt-5 d-flex align-items-start col-md-2">
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

            </div>
        </div>
    );
}