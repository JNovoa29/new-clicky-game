import React from "react";
import "./MatchCard.css";

const MatchCard = props => (
  <div className="img-container">
    <img
      alt={props.id}
      src={props.image}
    />
  </div>
);

export default MatchCard;