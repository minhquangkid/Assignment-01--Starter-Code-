import React, { useState } from "react";
import styles from "./header.module.css";
import Iform from "./iform";
import Popup from "./popup";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Header = () => {
  const icon = [
    {
      icon: "fa fa-bed",
      label: "Where are you going?",
    },
    {
      icon: "fa fa-calendar",
      label: "6/24/2022 to 6/24/2022",
    },
    {
      icon: "fa fa-female",
      label: "1 adult-0 children-1 room",
    },
  ];
  const [giatri, setGiatri] = useState("");

  const [pick, setpick] = useState(false);

  const changing = (e) => {
    setpick(e);
  };
  const changDate = (e) => {
    setGiatri(e);
    setpick(false);
  };

  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1 className={styles.tieude}>A lifetime of discounts? It's Genius.</h1>
        <p className={styles.tieude}>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button className={styles.button}>Sign in / Register</button>
      </div>
      <div className={styles.inform}>
        {icon.map((item) => {
          return (
            <Iform
              key={item.icon}
              content={item}
              isPick={pick}
              receive={changing}
              dienvao={giatri}
            />
          );
        })}
        <Link to="/search">
        <button className={styles.button}>
          Search
        </button>
        </Link>
        <div className={pick ? styles.hien : styles.an}>
          <Popup ngay={changDate} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
