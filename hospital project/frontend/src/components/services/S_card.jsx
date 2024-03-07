import React from "react";
import Style from "./services.module.css";
import Button from "../button/Button";

const S_card = ({ img, title, disc }) => {
  return (
    <>
      <div className="col-4">
        <div className={`${Style.serv_card} bg-light rounded-4 p-5`}>
          <img src={img} alt="" />
          <h2 className={Style.servCardTitle}>{title}</h2>
          <p>{disc}</p>
          <Button colorOrange={true} isCardBtn={true} isTrans={true} btn_title={"Learn More"} />
        </div>
      </div>
    </>
  );
};

export default S_card;
