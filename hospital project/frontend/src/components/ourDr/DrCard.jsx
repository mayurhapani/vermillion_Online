import React from "react";
import Style from "./ourDr.module.css";
import Button from "../button/Button";

import drDp1 from "../../assets/images/drDp1.png";

export default function DrCard() {
  return (
    <div className="col-3">
      <div className={Style.cardOuter}>
        <img className={Style.DrCardImg} src={drDp1} alt="" />
        <h3 className={Style.drCardTitle}>Dr. Arun Singhvi</h3>
        <p className="text mb-1">Co-founder, promoter, Chairman, and Managing Director </p>
        <Button isCardBtn={true} isTrans={true} btn_title={"Learn More"} colorOrange={true} />
      </div>
    </div>
  );
}
