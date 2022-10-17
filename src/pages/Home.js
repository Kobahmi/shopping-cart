import React from "react";
import halloween from "../images/halloween.png";
import pic from "../images/picone.jpg";
import pictwo from "../images/pictwo.png";
import picthree from "../images/picthree.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-content">
      <div className="real-content">
        <Link className="wallpaper-content" to="/shop">
          <img
            className="wallpaper"
            src={halloween}
            alt="halloween"
            loading="lazy"
          />
          <div className="big-sale">
            <h3>EXTRA</h3>
            <h1>15% OFF</h1>
            <h2>MARKDOWNS</h2>
            <p>
              CODE: <span>JS42</span>
            </p>
            <div className="shop-now">
              <h2>SHOP NOW</h2>
            </div>
          </div>
        </Link>
        <div className="polish-container">
          <div>
            <Link className="info" to="/shop">
              <img className="info-pic" src={pictwo} alt="pic" loading="lazy" />
              <p>HALLOWEEN SPOOKS</p>
            </Link>
          </div>
          <div>
            <Link className="info" to="/shop">
              <img
                className="info-pic"
                src={picthree}
                alt="pic"
                loading="lazy"
              />
              <p>GET READY FOR CHRISTMAS</p>
            </Link>
          </div>
          <div>
            <Link className="info" to="/shop">
              <img className="info-pic" src={pic} alt="pic" loading="lazy" />
              <p>GLAZED DONUT NAIL TREND</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
