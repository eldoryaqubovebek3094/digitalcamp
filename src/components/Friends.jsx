import React from "react";
import "./Friends.css";
const Friends = (props) => {
  return (
    <div className="container">
      <h1>Ismi: {props.name}</h1>
      <br />
      <img src={`images/${props.rasm}.png`} alt={props.name} /> <br />
      <h4>Yoshi: {props.age}</h4>
      <br />
      <div>
        <h5>Kasbi: {props.job}</h5>
      </div>
    </div>
  );
};

export default Friends;
