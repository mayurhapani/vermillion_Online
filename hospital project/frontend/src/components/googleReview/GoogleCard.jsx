import React from "react";
import Style from "./google.module.css";

import stars from "../../assets/images/stars.png";
import client from "../../assets/images/client.png";

export default function GoogleCard() {
  return (
    <div className="col-3">
      <div className="card p-4 mb-4">
        <img className={Style.cardImg} src={stars} alt="" />
        <p className="text">
          Recently I have been operated for my Right Eye Surgery which was Performed by well known & expert Dr. Sean S Da Silva...
        </p>
        <div className="d-flex justify-center items-center">
          <img src={client} alt="" />
          <div className="ms-3">
            <span>Dattaram Gaonkar</span>
            <br />
            <span className="text">13 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
