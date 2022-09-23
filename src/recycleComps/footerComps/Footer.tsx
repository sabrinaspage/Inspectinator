import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const [control, setControl] = useState(0);

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setControl(1);
    } else {
      setControl(0);
    }
  }, [location]);

  if (control === 0) {
    return (
      <div className="px-3 bg-dark py-2">
        <div className="px-3 mx-4 py-1">
          <div className="row container-fluid text-light py-2">
            <div className="col-lg-3 d-flex align-items-center">
              <h4 className="m-0 p-0 fs-5">Inspectinator</h4>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <Link to="/about">
                <div className="px-4 text-light">About</div>
              </Link>
              <Link to="/team">
                <div className="px-4 text-light">Team</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="px-3 py-2 w-100"
      style={{ position: "absolute", bottom: "0" }}
    >
      <div className="px-3 mx-4 py-1">
        <div className="row container-fluid py-2">
          <div className="col-lg-3 d-flex align-items-center">
            <p className="m-0 p-0">&copy; 2022 Inspectinator</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center"></div>
          <div className="col-lg-3 d-flex align-items-center justify-content-end"></div>
        </div>
      </div>
    </div>
  );
}
