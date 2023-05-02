import React, { useState } from "react";
import image from "../assets/icons/Group 3.svg";
import "./Home.css";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <img src={image} alt="icon" />
        <h1 className="hompage-headline">Keep Track Of Daily Tasks In Life</h1>
        <Link to="/login">
          <button className="btn get-started-btn">Get Started</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
