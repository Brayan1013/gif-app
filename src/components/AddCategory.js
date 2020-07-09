/** @format */
import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setSeries }) => {
  const [category, setCategory] = useState("");

  const handleOnChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length > 2) {
      setSeries((series) => [category, ...series]);
      console.log("Submit hecho");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={category} onChange={handleOnChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setSeries: PropTypes.func.isRequired,
};

export default AddCategory;
