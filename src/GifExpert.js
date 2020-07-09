/** @format */
import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpert = () => {
  const [series, setSeries] = useState(["Dragon ball"]);

  return (
    <>
      <h1>Gift expert</h1>
      <AddCategory setSeries={setSeries} />
      <hr />
      <ol>
        {series.map((serie) => {
          return <GifGrid serie={serie} key={serie} />;
        })}
      </ol>
    </>
  );
};

export default GifExpert;
