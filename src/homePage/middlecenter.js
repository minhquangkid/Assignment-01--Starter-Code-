import React from "react";
import typeHotel from "../data/type.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./middle.module.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
const MiddleCenter = () => {
  return (
    <div className="row">
      {typeHotel.map((item) => {
        return (
          <div className="col" key={item.name}>
            <Link to="/detail">
            <div style={{ position: "relative" }}>
              <img className={styles.imgMin} alt={item.name} src={item.image} />
              <div className={styles.detailHotel}>
                <h4>{item.name}</h4>
                <p>{item.count}</p>
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
export default MiddleCenter;
