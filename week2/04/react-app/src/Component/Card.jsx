import React from "react";
import "./card.css";
export default function Card(props) {
  return (
    <div className="wrap">
      <div className="rectangle"></div>
      <div className="test">
        <h1>{props.data.name}</h1>
        <h1>{props.data.price}</h1>
        <h1>{props.data.stock}</h1>
        <h1>{props.data.desc}</h1>
      </div>
      <div className="cont-btn">
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
}

