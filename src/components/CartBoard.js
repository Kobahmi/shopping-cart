import React from "react";
import Cart from "./Cart";

const CartBoard = (props) => {
  const { totalCards, handleQuantity, handleRemove } = props;

  return (
    <div className="cart-board">
      {totalCards.map((cart) => (
        <Cart
          cart={cart}
          key={cart.id}
          handleQuantity={handleQuantity}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default CartBoard;
