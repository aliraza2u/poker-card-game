import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import ResultCard from "../result-card";
import { generateCards } from "../../constants/cardData";
import React from "react";
import Confetti from "react-confetti";
import diamondImg from "./../../assets/Diamond.svg";
import heartImg from "./../../assets/Heart.svg";
import spadeImg from "./../../assets/Spade.svg";
import clubImg from "./../../assets/Clover.svg";
import DeckCard from "../deck-card";
import ResultBox from "../deck-result";

const colorMap = {
  spades: "black",
  diamonds: "red",
  clubs: "black",
  hearts: "red",
};
const cardImages = {
  spades: spadeImg,
  diamonds: diamondImg,
  clubs: clubImg,
  hearts: heartImg,
};
const transitionTime = {
  0: 500,
  1: 1000,
  2: 1500,
  3: 2000,
  4: 2500,
};
const CardGame = () => {
  const data = generateCards();
  const [deck, setDeck] = useState();
  const [card, setCard] = useState();
  const [isAceAvailable, setIsAceAvailable] =
    useState(false);
  const [isWin, setIsWin] = useState(false);
  const [countWin, setCountWin] = useState(0);
  const [countLoss, setCountLoss] = useState(0);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    let arr = [...data];
    arr = arr.sort(() => 0.5 - Math.random());
    let cardData = arr.splice(0, 5);
    setDeck(arr);
    const aceItems = cardData.filter(
      (x) => x.number === "A"
    );
    if (aceItems.length === 4) {
      setIsAceAvailable(true);
      setIsWin(false);
    }
    setCard(cardData);
    setReset(0);
  }, [reset]);

  //! Handle Deal Function
  const handleDeal = () => {
    let arr = [...deck];
    arr = arr.sort(() => 0.5 - Math.random());
    let cardData = arr.splice(0, 5);
    setDeck(arr);
    const aceItems = arr.filter((x) => x.number === "A");
    let isAceListEmpty;
    if (aceItems.length === 0) {
      setIsAceAvailable(true);
      setIsWin(false);
      isAceListEmpty = true;
    }
    setCard(cardData);
    if (arr.length === 0) {
      const checkWin = cardData.filter(
        (x) => x.number === "A"
      );
      if (checkWin.length !== 0) {
        setIsWin(true);
      }
      setCountWin(countWin + 1);
    }
    if (arr.length !== 0 && isAceListEmpty) {
      setCountLoss(countLoss + 1);
    }
  };
  //! Handle Reset Function
  const handleReset = () => {
    setReset(1);
    setIsAceAvailable(false);
    setIsWin(false);
  };

  //! Congratulations Effects
  const confetti = (
    <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 200}
      numberOfPieces={200}
    />
  );
  return (
    <div className="main-wrapper">
      {isWin && confetti}
      <ResultBox
        deck={deck}
        isAceAvailable={isAceAvailable}
        isWin={isWin}
      />
      <DeckCard
        cardData={card}
        transitionTime={transitionTime}
        colorMap={colorMap}
        cardImages={cardImages}
      />
      <div className="button-wrapper">
        {isAceAvailable ? (
          <Button
            onClick={handleReset}
            className="btn-play-again"
          >
            Play Again
          </Button>
        ) : (
          <Button onClick={handleDeal} variant="outlined">
            Deal
          </Button>
        )}
      </div>
      <div className="result-reset-btn">
        <ResultCard win={countWin} loss={countLoss} />
        <Button onClick={handleReset} className="btn-reset">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CardGame;
