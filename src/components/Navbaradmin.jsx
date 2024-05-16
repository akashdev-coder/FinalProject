import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbaradmin() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`container-fluid ${sticky ? "sticky-top " : ""} adminBack py-2 mb-5`}>
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-12 col-md-3">
              <a className="navbar-brand" href="#">
                bookStore
              </a>
            </div>
            <div className="col-12 col-md-6">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <p className="nav-link">Welcome to admin dashboard</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <div className="form-inline my-2 my-lg-0">
                {authUser ? (
                  <Logout />
                ) : (
                  <div className="">
                    <button
                      className="btn btn-dark my-2 my-sm-0"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbaradmin;
