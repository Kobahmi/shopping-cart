import React from "react";
import Card from "./Card";

const Board = (props) => {
  const { handleClick, totalCards } = props;

  return (
    <div className="board">
      {totalCards.map((card) => (
        <Card card={card} key={card.id} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Board;
