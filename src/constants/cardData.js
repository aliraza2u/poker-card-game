export const generateCards = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const deck = [];

  numbers.forEach((item, numberIndex) => {
    suits.forEach((suit, suitIndex) => {
      deck.push({ suit, number: item });
    });
  });
  return deck;
};
