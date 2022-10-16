import React from "react";

const Cart = (props) => {
  const { cart, handleQuantity, handleRemove } = props;
  return (
    <div className="cart-item">
      <div className="image-container">
        <img src={cart.image} id={cart.id} alt="character" />
      </div>
      <div className="name-container">
        <p className="polish-name">{cart.name}</p>
        <div className="remove-container">
          <div className="combien-container">
            <button
              className="minus"
              id="minus"
              onClick={() => handleQuantity("-", cart.id)}
            >
              -
            </button>
            <div className="combien">
              <p>{cart.quantity}</p>
            </div>
            <button
              className="plus"
              id="plus"
              onClick={() => handleQuantity("+", cart.id)}
            >
              +
            </button>
          </div>
          <button
            className="remove-button"
            onClick={() => handleRemove(cart.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="total-container">
        <p>{cart.total}$</p>
      </div>
    </div>
  );
};

export default Cart;
