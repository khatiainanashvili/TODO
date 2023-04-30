import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Todo from "./Todo";
export default function UserPage() {
  const [active, setActive] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setActive(true);
  };
  const handlelogOut = () => {
    localStorage.clear();
  };
  console.log(location.state.name);
  return (
    <>
      <h1>{location.state.username}</h1>
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
      <Todo />
    </>
  );
}
