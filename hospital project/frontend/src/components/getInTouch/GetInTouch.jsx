import React from "react";
import Styel from "./get_in_touch.module.css";
import Buttonn from "../button/Button";

const GetInTouch = () => {
  return (
    <div className={Styel.getInTouchOuter}>
      <div className="container">
        <div className={`${Styel.get_in_touch} d-flex rounded-4`}>
          <div className="col">
            <h2 className="mb-3">Get in Touch</h2>
            <p>Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</p>
          </div>
          <div className="col text-center my-auto">
            <Buttonn btn_title={"BOOK APPOINTMENT"} />
            <div className={`${Styel.contact} text-white d-flex align-items-center justify-content-center mt-3`}>
              <i className={`me-3 ri-phone-line ${Styel.setCall}`}></i>
              <h3>1800 1200 111</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
