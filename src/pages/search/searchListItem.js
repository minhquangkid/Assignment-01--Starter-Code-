import React from "react";
import "./search.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const SearchListItem = (props) => {

  const cancel = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: "700", color: "green" }}>Free cancellation</p>
        <p style={{ color: "green" }}>
          You can cancel later, so lock in this great price today!
        </p>
      </React.Fragment>
    );
  };
  return (
    <div className="container-flex">
      <div className="row khung">
        <div className="col-4">
          <img
            className="hinh"
            src={props.item.image_url}
            alt={props.item.name}
          ></img>
        </div>

        <div className="col-8">
          <div className="container-flex">
            <div className="row">
              <div className="col-8">
                <h4 style={{ color: "rgb(0, 98, 255)" }}>{props.item.name}</h4>
                <p>{props.item.distance}</p>
                <p>
                  <span className="tag">{props.item.tag}</span>
                </p>
                <h6 style={{ fontWeight: "700" }}>{props.item.description}</h6>
                <p>{props.item.type}</p>
                <div>{props.item.free_cancel && cancel()}</div>
              </div>
              <div className="col-4 box">
                <span className="rate_text">{props.item.rate_text}</span>
                <span className="rate">{props.item.rate}</span>
                <p className="price">${props.item.price}</p>
                <p className="inf">Includes taxes and fees</p>
                <Link to="/detail"><button className="avail">
                  See availability
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
