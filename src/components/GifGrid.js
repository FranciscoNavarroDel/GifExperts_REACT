import React from "react";
import { useState, useEffect } from "react";
import { GiftGridItem } from "./GiftGridItem";
import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {
  // Hace que el codigo sea renderizado solo la primera vez
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then( setImages)
  }, [category]);



  return (
    <>
      <h3>{category}</h3>
      <div className="card_grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
