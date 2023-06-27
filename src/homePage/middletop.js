import React from "react";
import cty from "../data/city.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./middle.module.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
const MiddleTop = () => {
  return (
    <div className="row">
      {cty.map((item) => {
        return (
          <div className="col" key={item.name}>
            <Link to="/search">
            <div style={{ position: "relative" }}>
              <img
                className={styles.imgLage}
                alt={item.name}
                src={item.image}
              />
              <div className={styles.detail}>
                <h4>{item.name}</h4>
                <p>{item.subText}</p>
              </div>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleTop;
