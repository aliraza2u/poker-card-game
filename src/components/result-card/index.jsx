import React from "react";

const ResultCard = ({ win, loss }) => {
  return (
    <div className="result-card-wrapper">
      <div className="win">
        <h5>Win</h5>
        <p>{win}</p>
      </div>
      <div className="loss">
        <h5>Loss</h5>
        <p>{loss}</p>
      </div>
    </div>
  );
};

export default ResultCard;
