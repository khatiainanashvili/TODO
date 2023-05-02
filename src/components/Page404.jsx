import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div className="page404">
      <h1> 404 </h1>
      <h2>Page Not Found</h2>
      <Link to="/">
        <button className="btn">Go to Home</button>
      </Link>
    </div>
  );
}
