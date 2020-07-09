/** @format */
import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGif } from "./hooks/useFetchGif";

const GifGrid = ({ serie }) => {
  const { data: images, loading } = useFetchGif(serie);
  return (
    <div>
      <div className="title">
        <h1>{serie}</h1>
        {loading ? <p>Loading</p> : null}
      </div>
      <div className="list-card">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
