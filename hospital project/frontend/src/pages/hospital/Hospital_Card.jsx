import React from "react";
import Style from "./hospital.module.css";
import Button from "../../components/button/Button";

const Hospital_Card = ({ img, disc, location, c_no }) => {
  return (
    <>
      <div className="col-4">
        <div className={`${Style.hosp_div_main} rounded-4 shadow`}>
          <img className="w-100 rounded-3" src={img} alt="" />
          <h2 className={Style.CardTitle}>{disc}</h2>
          <div className="d-flex align-items-center my-3">
            <div className="">
              <div className={`d-flex align-items-center`}>
                <div className="me-2">
                  <i className={`${Style.hosp_connect_icon} ri-map-pin-line fs-3`}></i>
                </div>
                <h4>
                  <a className={`${Style.hosp_connect_data} text-decoration-none d-block`} href="">
                    {location}
                  </a>
                </h4>
              </div>
              <div className={`d-flex align-items-center`}>
                <div className="me-2">
                  <i className={`${Style.hosp_connect_icon} ri-phone-line fs-3`}></i>
                </div>
                <h4>
                  <a className={`${Style.hosp_connect_data} text-decoration-none d-block`} href="">
                    <b>{c_no}</b>
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-evenly">
            <div className="me-3">
              <Button btn_title={"View Profile"} isHide={true} isBlueBtn={true} isSmall={true} />
            </div>
            <Button btn_title={"Get direction"} isTransBlue={true} isHide={true} isSmall={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospital_Card;
