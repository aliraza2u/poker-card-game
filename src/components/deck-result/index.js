import React from "react";
import winnerImg from "./../../assets/winner.svg";

const ResultBox = ({ deck, isAceAvailable, isWin }) => {
  return (
    <div className="result-box-wrapper">
      {deck && (
        <div className="total-numbers">
          {isAceAvailable && !isWin && <h1>You Loss</h1>}
          {deck.length > 0 ? (
            <>
              <h1>{deck.length}</h1>
              <span>Cards Left</span>
            </>
          ) : (
            <>
              <h1>{deck.length}</h1>
              {isWin ? (
                <>
                  <img src={winnerImg} alt="Card Game" />
                </>
              ) : (
                <h1>Loss !</h1>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultBox;
