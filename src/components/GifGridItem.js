/** @format */
import React from "react";

const GifGridItem = ({ id, title, img }) => {
  return (
    <div className="container-card animate__animated animate__fadeIn">
      <div className="image-card">
        <img src={img} alt="gif de imagen" />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GifGridItem;
