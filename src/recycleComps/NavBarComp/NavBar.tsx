import { useLocation, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Logo from "../nspectinator.png";

export default function Navbar() {
  const location = useLocation();

  const [control, setControl] = useState(0);

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setControl(1);
    } else {
      setControl(0);
    }
  }, [location]);

  const auth = useContext(AuthContext);

  let navigate = useNavigate();

  function signOut() {
    window.alert("Signed Out");
    auth.setUserData("", "");
    auth.setLoggedIn(false);

    navigate("../", { replace: true });
  }

  return (
    <div
      className="w-100 px-2 navbar mt-1"
      style={control === 1 ? { position: "absolute", top: "0" } : {}}
    >
      <div className="mx-3 w-100 px-3 floatingEffect">
        <div className="row mx-2">
          <div className="col-lg-6 d-flex align-items-center">
            <Link to={"/"}>
              <img src={Logo} style={{ width: "170px" }} />
            </Link>
          </div>
          {control === 0 && !auth.loggedIn && (
            <div className="col-lg-6 d-flex justify-content-end pt-3">
              <button className="bg-primary btn" style={{ height: "40px" }}>
                <Link to="/signin">
                  <p className="text-white">Sign In</p>
                </Link>
              </button>
            </div>
          )}
          {control === 0 && auth.loggedIn && (
            <div className="col-lg-6 row d-flex align-items-center">
              <div className="col-lg-10 d-flex align-items-center justify-content-end">
                <Link to={"/dashboard"}>
                  <p className="text-dark p-0 m-0 mx-5">{auth.userName}</p>
                </Link>
              </div>
              <button className="bg-primary btn col-lg-2" onClick={signOut}>
                <p className="text-white px-3 py-2 m-0">Sign Out</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
