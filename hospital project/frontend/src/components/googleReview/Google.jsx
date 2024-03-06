import React from "react";
import Style from "./google.module.css";

import google from "../../assets/images/google.png";
import stars from "../../assets/images/stars.png";
import client from "../../assets/images/client.png";
import GoogleCard from "./GoogleCard";

export default function Google() {
  return (
    <section className={Style.googleOuter}>
      <div className="container">
        <div className="my-5">
          <h2 className={`${Style.title}`}>
            <img src={google} alt="" />
            <img className="mx-3" src={stars} alt="" />
            Reviews
          </h2>

          <div className="row">
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
            <GoogleCard />
          </div>
        </div>
      </div>
    </section>
  );
}
