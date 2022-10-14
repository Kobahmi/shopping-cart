import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import products from "./components/Products";
import CartBoard from "./components/CartBoard";
import emptyBag from "./images/empty.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RouteSwitch = () => {
  const [cartState, setCartState] = useState("none");
  const [totalCards, setTotalCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const getData = () => {
      const polish = products;
      let data = [];

      polish.forEach((el) => {
        data.push({
          name: el.name,
          image: el.src,
          id: el.id,
          price: el.price,
          quantity: 1,
          total: 20,
        });
      });
      setTotalCards([...data]);
    };
    getData();
  }, []);

  const handleClick = (id) => {
    if (checkCart(id)) {
      notify();
    } else {
      let item = totalCards.find((el) => el.id === id);
      setCart([...cart, item]);
      notifyAdd();
    }
  };

  const checkCart = (id) => {
    return cart.find((el) => el.id === id);
  };

  useEffect(() => {
    const minimizeOnClick = () => {
      if (cartState === "none") {
        setCartState("flex");
      } else {
        setCartState("none");
      }
    };

    document.querySelector(".left").addEventListener("click", minimizeOnClick);
    document.querySelector(".bag").addEventListener("click", minimizeOnClick);
    document.querySelector(".close").addEventListener("click", minimizeOnClick);
    return () => {
      document
        .querySelector(".left")
        .removeEventListener("click", minimizeOnClick);
      document
        .querySelector(".bag")
        .removeEventListener("click", minimizeOnClick);
      document
        .querySelector(".close")
        .removeEventListener("click", minimizeOnClick);
    };
  }, [cartState]);

  const handleQuantity = (op, id) => {
    let item = cart.find((el) => el.id === id);
    if (op === "+") {
      item.quantity = item.quantity + 1;
    } else {
      if (item.quantity === 1) return deleteItem(id);
      item.quantity = item.quantity - 1;
    }
    item.total = item.quantity * item.price;
    setCart([...cart]);
  };

  const grandTotal = (arr) => {
    let total = 0;

    arr.forEach((el) => {
      el.total = el.quantity * el.price;
      total += el.total;
    });
    return total;
  };

  const checkEmpty = () => {
    console.log("WHY");
    if (totalQuantity(cart) === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const totalQuantity = (arr) => {
    let total = 0;
    arr.forEach((el) => {
      total += el.quantity;
    });
    return total;
  };

  const deleteItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const notify = () => toast.info("Item already in the bag!");
  const notifyAdd = () => toast.success("Item added in the bag!");

  return (
    <BrowserRouter>
      <Header bagNumber={totalQuantity(cart)} checkEmpty={checkEmpty} />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/shopping-cart/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop totalCards={totalCards} handleClick={handleClick} />}
        />
      </Routes>
      <div className="cart" style={{ display: cartState }}>
        <div className="left" style={{ display: cartState }}></div>
        <div className="right" style={{ display: cartState }}>
          <div className="item-number-container">
            <h1>Bag</h1>
            <p>({totalQuantity(cart)} Items)</p>
          </div>
          {!empty ? (
            <CartBoard
              totalCards={cart}
              handleQuantity={handleQuantity}
              handleRemove={deleteItem}
            />
          ) : (
            <div className="empty-bag">
              <img src={emptyBag} alt="Empty" />
            </div>
          )}
          <div className="subtotal">Subtotal: {grandTotal(cart)}$</div>
          <div className="button-container">
            <button className="checkout">Checkout</button>
            <button className="close">Close</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
