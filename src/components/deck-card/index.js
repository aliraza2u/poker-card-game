import React from "react";
import Grow from "@mui/material/Grow";

const DefaultCard = ({
  cardData,
  transitionTime,
  colorMap,
  cardImages,
}) => {
  return (
    <div className="card-wrapper">
      {cardData?.map((x, index) => (
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          timeout={transitionTime[index]}
          key={x.number + x.suit}
        >
          <div>
            <div className="card">
              <div className="sm-image-wrapper">
                <h1 style={{ color: colorMap[x.suit] }}>
                  {x.number}
                </h1>
                <img
                  src={cardImages[x.suit]}
                  alt={x.suit}
                />
              </div>
              <div className="lg-image-wrapper">
                <img
                  src={cardImages[x.suit]}
                  alt={x.suit}
                />
              </div>
            </div>
          </div>
        </Grow>
      ))}
    </div>
  );
};

export default DefaultCard;
