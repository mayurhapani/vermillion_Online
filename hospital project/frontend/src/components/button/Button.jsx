import React from "react";
import Style from "./button.module.css";

const Button = ({ isHide, isTrans, btn_title, colorWhite, colorOrange, isTransBlue, isBlueBtn, isSmall }) => {
  return (
    <div>
      <a href={""}>
        <button
          className={`${Style.btn} ${isSmall && Style.isSmall} ${isTransBlue && Style.isTransBlue} ${isBlueBtn && Style.isBlueBtn} ${
            isTrans && Style.bg_color
          } ${colorWhite && Style.colorWhite} ${colorOrange && Style.colorOrange}`}
        >
          <span className={`${Style.btn_span} ${isTransBlue && Style.textBlue} ${isTrans && Style.span_color} `}>{btn_title}</span>
          <i className={`ri-arrow-right-line ${Style.btn_arrow} ${isTrans && Style.text_color} ${isHide && Style.d_none}`}></i>
        </button>
      </a>
    </div>
  );
};

export default Button;
