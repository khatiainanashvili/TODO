import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageIcon from "../assets/icons/app-photo.svg";

export default function Login() {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const username = useRef();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem("uploadedImage", reader.result);
      setImage(file);
    };
  };
  const navigate = useNavigate();
  function handleSumbit(e) {
    e.preventDefault();
    if (savedImage && name) {
      localStorage.setItem("usesrname", JSON.stringify(name));
      navigate("/userpage", {
        state: {
          image: savedImage,
          username: name,
        },
      });
    }
  }

  const savedImage = localStorage.getItem("uploadedImage");

  return (
    <>
      <form className="autorisation-form" onSubmit={handleSumbit}>
        <label>add a photo</label>
        <div className="upload-avatar">
          <input
            type="file"
            onChange={handleImageUpload}
            className="image-input"
            id="file"
          />
          <label htmlFor="file">
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
        <div className="input-name">
          <label>fill in you name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            ref={username}
          />
          <button>Sign In</button>
        </div>
      </form>
    </>
  );
}
