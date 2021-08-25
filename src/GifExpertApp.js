import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //Hooks
  const [categories, setCategories] = useState(["One Punch"]);

  //Handles
  // const HandleAdd = ()=>{
  //     setCategories([...categories, "Hunter X Hunter" ])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
