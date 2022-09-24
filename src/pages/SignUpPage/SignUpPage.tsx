import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import * as sjcl from "sjcl";

import "./SignUpPage.css";

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  async function signUpFunc() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if (!email || !password || !name) {
      setErrorMessage("All fields are required");
      return;
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/auth/checkEmail/" + email,
      {
        method: "GET",
      }
    );

    const records = await response.json();

    if (records.length > 0) {
      setErrorMessage("User already exists");
      return;
    }

    const myString = password;
    const myBitArray = sjcl.hash.sha256.hash(myString);
    const myHash = sjcl.codec.hex.fromBits(myBitArray);

    const newPerson = { name: name, email: email, password: myHash };

    await fetch("http://localhost:5000/auth/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    window.alert("Account created successfully");
    setErrorMessage("");
  }

  return (
    <div className="container-fluid h-100">
      <div className="row vh-100">
        <div className="d-flex align-items-md-center col-lg-6 col-sm-12 justify-content-center">
          <div className="col-md-8 col-lg-6" style={{ textAlign: "left" }}>
            <h2>Sign Up</h2>
            <p className="mt-3 fs-6 fst-normal text-black-50">
              Enter your details below to complete sign up
            </p>

            <p className="p-0 pb-1 mt-5 mb-2 fs-8">Name*</p>
            <input
              style={{ borderRadius: "8px" }}
              type="text"
              ref={nameRef}
              className="py-2 px-3 form-control"
              placeholder="Enter your name"
            />

            <div className="p-2"></div>

            <p className="p-0 pb-1 mb-2 mt-3 fs-8">Email*</p>
            <input
              style={{ borderRadius: "8px" }}
              type="text"
              ref={emailRef}
              className="y-2 px-3 form-control"
              placeholder="Enter your password"
            />

            <div className="p-2"></div>

            <p className="p-0 pb-1 mb-2 mt-3 fs-8">Password*</p>
            <input
              style={{ borderRadius: "8px" }}
              type="password"
              ref={passwordRef}
              className="y-2 px-3 form-control"
              placeholder="Enter your password"
            />
            <p className="mt-2 fs-6 fst-normal text-black-50">
              <small>Must be atleast 8 characters</small>
            </p>

            <div className="w-100 text-center">
              <p className="text-danger">{errorMessage}</p>
            </div>

            <button
              style={{ borderRadius: "8px" }}
              className="btn w-100 btn-dark p-2 mt-4 bg-dark"
              onClick={signUpFunc}
            >
              Get Started
            </button>
            <p className="text-center mt-3 pb-0 mb-0 fs-6 fst-normal text-black-50">
              <small>
                Already have an account?<span> </span>
                <span className="text-black" style={{ fontWeight: "500" }}>
                  <Link to="/signin">Sign In</Link>
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
