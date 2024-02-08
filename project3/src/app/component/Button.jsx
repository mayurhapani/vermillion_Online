import React from "react";
import Style from "../styles/Header.module.css";

const Button = ({ text }) => {
  return <button className={Style.btn}>{text}</button>;
};

export default Button;
