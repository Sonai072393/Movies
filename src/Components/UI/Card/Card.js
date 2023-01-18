import React from "react";

import "./Card.css";
const Card = (props) => {
  return (
    <div className="cardContainer" style={props.style}>
      <div className={`container`}>
        <span
          className={`col`}
          style={
            props.ratting < 6
              ? {
                  color: "red",
                  fontFamily: "cursive",
                }
              : {
                  color: "green",
                  fontFamily: "cursive",
                }
          }
        >
          <b>{props.cardTitle}</b>
        </span>
        <div className={`row`}>
          <b>
            <span
              className={`col`}
              style={props.ratting < 6 ? { color: "red" } : { color: "green" }}
            >
              Ratting
            </span>
          </b>
          <span
            style={props.ratting < 6 ? { color: "red" } : { color: "green" }}
          >
            {props.ratting}
          </span>
          <b>
            <span className={`col`}>Released Date</span>
          </b>
          <span>{props.released}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
