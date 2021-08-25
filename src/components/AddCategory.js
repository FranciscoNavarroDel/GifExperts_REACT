import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(
    "Escriba una categoría a agregar"
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCategories((categories) => [ inputValue, ...categories]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};


AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}

export { AddCategory };
