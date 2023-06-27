import React from "react";
import list from "../data/hotel_list.json";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./middle.module.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const MiddleBottom = () => {

  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div className="col" key={item.name}>
            <Link to="/detail">
            <div style={{ position: "relative" }}>
              <img
                className={styles.imgFour}
                alt={item.name}
                src={item.image_url}
              />
              <div>   
               <h5 className={styles.link}>
                  {item.name}
                </h5>
                <p>{item.city}</p>
                <h5>{`Starting from ${item.price}`}</h5>
                <span className={styles.mark}>{item.rate}</span>
                <span style={{ marginLeft: "10px" }}>{item.type}</span>
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
export default MiddleBottom;
