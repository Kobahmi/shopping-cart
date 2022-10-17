import React from "react";

const Card = (props) => {
  const { card, handleClick } = props;
  return (
    <div className="card" onClick={() => handleClick(card.id)}>
      <img
        className="polish-picture"
        src={card.image}
        id={card.id}
        alt="character"
        loading="lazy"
      />
      <div className="polish-name-container">
        <p className="polish-name">{card.name}</p>
        <p>{card.price}$</p>
      </div>
    </div>
  );
};

export default Card;
