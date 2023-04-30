import React from "react";
import image from "../assets/icons/Group 3.svg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <img src={image} alt="icon" />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
