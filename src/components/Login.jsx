import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import imageIcon from "../assets/icons/app-photo.svg";
import "./Login.css";
import UserPage from "./UserPage";

export default function Login() {
  const [image, setImage] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem("uploadedImage", reader.result);
      setImage(file);
    };
  };
  const savedImage = localStorage.getItem("uploadedImage");
  const users = [{ name: name, userimage: savedImage }];
  const account = users.find((user) => user.name === name);

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated"))
  );

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, [savedImage, name]);

  function handleSumbit(e) {
    e.preventDefault();
    if (account && account.name === name) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      localStorage.setItem("usesrname", name);
    }
  }
  const savedName = localStorage.getItem("usesrname");

  if (authenticated) {
    <Navigate replace to="/" />;
    return <UserPage image={savedImage} username={savedName} />;
  } else {
    return (
      <>
        <div className="login-container">
          <form className="autorisation-form" onSubmit={handleSumbit}>
            <h2>Get Started</h2>
            <div className="upload-image">
              <label>add a photo</label>
              <div className="upload-avatar">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="image-input"
                  id="file"
                />
                <label htmlFor="file" className="upload-image-label">
                  <img src={imageIcon} alt="imageIcon" />
                </label>
                {savedImage && (
                  <img
                    src={savedImage}
                    alt="Uploaded Image"
                    className="avatar-image"
                  />
                )}
              </div>
            </div>
            <div className="input-name">
              <label>fill in you name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="username-input"
                placeholder="your name"
                required
              />
            </div>
            <button className="sign-in-btn btn">Sign In</button>
          </form>
        </div>
      </>
    );
  }
}
