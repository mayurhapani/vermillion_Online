import React from "react";
import Style from "./ourDr.module.css";
import Button from "../button/Button";

export default function DrCard({ drDetial }) {
  console.log(drDetial);
  return (
    <div className="col-3">
      <div className={Style.cardOuter}>
        <img className={Style.DrCardImg} src={drDetial.drImg} alt="" />
        <h3 className={Style.drCardTitle}>{drDetial.drName}</h3>
        <p className="text mb-1">{drDetial.drDescription} </p>
        <Button isCardBtn={true} isTrans={true} btn_title={"Learn More"} colorOrange={true} />
      </div>
    </div>
  );
}
