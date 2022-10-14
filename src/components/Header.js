import React from "react";
import art from "../images/art.png";
import bag from "../images/bag.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { bagNumber, checkEmpty } = props;

  return (
    <div className="home-content">
      <Link to="/shop" className="sale">
        <p>EXTRA 15% Off Markdowns! | Code: JS42</p>
      </Link>
      <div className="real-content">
        <div className="menu">
          <Link to="/shop">FREE SHIPPING 75$+</Link>
          <div className="header-menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <button className="bag" onClick={checkEmpty}>
              <img src={bag} alt="bag" />
              <p>{bagNumber}</p>
            </button>
          </div>
        </div>
        <Link className="head" to="/">
          <img className="art" src={art} alt="art" />
          <h1>UNREAL POLISH</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
