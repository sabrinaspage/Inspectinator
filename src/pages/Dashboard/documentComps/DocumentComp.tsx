
import './DocumentComp.css';
import { Link } from "react-router-dom";


export enum DocumentStatus {
    Progress = "In Progress",
    Signed = "Signed",
    Declined = "Declined"
}

export interface DocumentSection {
    filename: string;
    documentstatus: DocumentStatus;
    createdDate: string;
    restaurantName: string;
    address: string;
    id: string;
}

export default function DocumentComp({filename, documentstatus, createdDate, restaurantName, address, id} : DocumentSection) {
    var index = 1;
    return (
        <Link to={"/document/" + id}>
            <div>
                <div key={index} className="reports py-4">
                    <div className="row px-2">
                    <div className="d-grid align-items-center col-lg-8">
                        <p
                        className="m-0 text-dark"
                        style={{ fontWeight: "500" }}
                        >
                        {filename}
                        </p>
                        <p className="m-0 text-secondary">
                        <small>{restaurantName} - {address}</small> 
                        </p>
                    </div>
                    <div className="d-flex align-items-center col-lg-2">
                        <p className="m-0 text-secondary">{createdDate}</p>
                    </div>
                    <div className="d-flex align-items-center col-lg-2">
                        {documentstatus === "Declined" && (
                        <div
                            style={{
                            borderRadius: "30px",
                            backgroundColor: "#FEF3F2",
                            }}
                            className="py-1 px-3"
                        >
                            <p
                            style={{ color: "#F04438", fontWeight: "500" }}
                            className="m-0"
                            >
                            <small>{documentstatus}</small>
                            </p>
                        </div>
                        )}
                        {documentstatus === "Signed" && (
                        <div
                            style={{
                            borderRadius: "30px",
                            backgroundColor: "#ECFDF3",
                            }}
                            className="py-1 px-3"
                        >
                            <p
                            style={{ color: "#12B76A", fontWeight: "500" }}
                            className="m-0"
                            >
                            <small>{documentstatus}</small>
                            </p>
                        </div>
                        )}
                        {documentstatus === "In Progress" && (
                        <div
                            style={{
                            borderRadius: "30px",
                            backgroundColor: "#F2F4F7",
                            }}
                            className="py-1 px-3"
                        >
                            <p
                            style={{ color: "#667085", fontWeight: "500" }}
                            className="m-0"
                            >
                            <small>{documentstatus}</small>
                            </p>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                <div
                    style={{ height: "1px", backgroundColor: "#E3E2E2" }}
                    className="divider"
                ></div>
            </div>
        
        </Link>
    );
}