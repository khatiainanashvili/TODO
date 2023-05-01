import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserPage.css";
import Todo from "./Todo";
import logoutIcon from "../assets/icons/logout.svg";
export default function UserPage() {
  const [active, setActive] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setActive(!active);
  };
  const handlelogOut = () => {
    localStorage.clear();
  };
  console.log(location.state.name);

  return (
    <>
      <header>
        <h1>TO DO </h1>
        <div className="user-info">
          <span>{location.state.username}</span>
          <div className="avatar">
            <img
              src={location.state.image}
              className="header-image"
              alt="klfkmemf
         "
              onClick={handleClick}
            />
            {active == true ? (
              <Link to="/todo/">
                <button className="logout-btn" onClick={handlelogOut}>
                  log-out <img src={logoutIcon} />
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
      <Todo />
    </>
  );
}
