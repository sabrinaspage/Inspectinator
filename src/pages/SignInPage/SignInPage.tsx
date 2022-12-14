import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as sjcl from "sjcl";

import "./SignInPage.css";

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth = useContext(AuthContext);

  let navigate = useNavigate();

  async function signInFunc() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/auth/checkEmail/" + email,
      {
        method: "GET",
      }
    );

    const records = await response.json();
    if (records.length === 0) {
      setErrorMessage("Invalid email or password");
      return;
    }

    const myString = password;
    const myBitArray = sjcl.hash.sha256.hash(myString);
    const myHash = sjcl.codec.hex.fromBits(myBitArray);

    if (records[0].password !== myHash) {
      setErrorMessage("Invalid password");
      return;
    }

    auth.setUserData(records[0]["name"], records[0]["_id"]);
    auth.setLoggedIn(true);
    auth.setDocuments(records[0]["documents"]);
    auth.setUserEmail(records[0]["email"]);

    window.alert("Login successful");

    navigate("../dashboard", { replace: true });

    setErrorMessage("");
  }

  return (
    <div className="container-fluid h-100">
      <div className="row vh-100">
        <div className="d-flex align-items-md-center col-lg-6 col-sm-12 justify-content-center">
          <div className="col-md-8 col-lg-6" style={{ textAlign: "left" }}>
            <h2>Welcome Back!</h2>
            <p className="mt-3 fs-6 fst-normal text-black-50">
              Please enter your details
            </p>

            <p className="p-0 pb-1 mt-5 mb-2 fs-8">Email</p>
            <input
              style={{ borderRadius: "8px" }}
              ref={emailRef}
              type="text"
              className="py-2 px-3 form-control"
              placeholder="Enter your email"
            />

            <div className="p-2"></div>

            <p className="p-0 pb-1 mb-2 mt-3 fs-8">Password</p>
            <input
              style={{ borderRadius: "8px" }}
              type="password"
              ref={passwordRef}
              className="y-2 px-3 form-control"
              placeholder="Enter your password"
            />

            <div className="mt-4 w-100 text-center">
              <p className="text-danger">{errorMessage}</p>
            </div>

            <button
              style={{ borderRadius: "8px" }}
              className="btn w-100 btn-dark p-2 mt-5 bg-dark"
              onClick={signInFunc}
            >
              Sign In
            </button>
            <p className="text-center mt-3 pb-0 mb-0 fs-6 fst-normal text-black-50">
              <small>
                Don't have an account?<span> </span>
                <span className="text-black" style={{ fontWeight: "500" }}>
                  <Link to="/signup">Sign Up</Link>
                </span>
              </small>
            </p>
          </div>
        </div>
        <div className="d-md-none d-lg-block d-flex col-lg-6 secondContainer"></div>
      </div>
    </div>
  );
}
