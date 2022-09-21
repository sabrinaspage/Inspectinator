import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Logo from "./nspectinator.png";

export default function TopNavBar() {
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
    <nav className="navbar justify-content-between">
      <a className="navbar-brand" href="/">
        <img src={Logo} style={{ width: "200px" }} />
      </a>
      <form className="form-inline">
        {control === 0 && !auth.loggedIn && (
          <Link to="/signin">
            <button className="btn btn-outline-success my-2 me-3 my-sm-0">
              Sign In
            </button>
          </Link>
        )}
        {control === 0 && auth.loggedIn && (
          <>
            <Link to="/dashboard">
              <div className="col-lg-10 d-flex align-items-center justify-content-end">
                <p className="text-dark p-0 m-0 mx-5">{auth.userName}</p>
              </div>
            </Link>
            <button
              className="btn btn-outline-success my-2 me-3 my-sm-0"
              onClick={signOut}
            >
              Sign Out
            </button>
          </>
        )}
      </form>
    </nav>
  );
}
