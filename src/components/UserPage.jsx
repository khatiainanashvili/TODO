import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserPage.css";
import Todo from "./Todo";
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
          <img
            src={location.state.image}
            className="header-image"
            alt="klfkmemf
         "
            onClick={handleClick}
          />
          {active == true ? (
            <Link to="/todo/">
              <button onClick={handlelogOut}>log-out</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </header>
      <Todo />
    </>
  );
}
