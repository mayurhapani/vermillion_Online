import React from "react";
import s from "./contact_us.module.css";

const Contact_card = () => {
  return (
    <section id={s.contact_card}>
      <div className="container">
        <div className={`${s.contact_head}`}>
          <h2 className={`text-center mb-5`}>Contact Us for Any Informations</h2>
        </div>
        <div className="row gy-4">
          <div className="col-4">
            <div className={`${s.cntct_card_box} text-center rounded-4 shadow`}>
              <i className="ri-phone-line"></i>
              <h2>Phone</h2>
              <p className="fs-3">(+91) 1800 1200 111</p>
            </div>
          </div>
          <div className="col-4">
            <div className={`${s.cntct_card_box} text-center rounded-4 shadow`}>
              <i className="ri-map-pin-line"></i>
              <h2>Address</h2>
              <p>
                1, Pal Link Rd, Kamla Nehru Nagar,
                <br /> Shyam Nagar, Jodhpur, Rajasthan 342008
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className={`${s.cntct_card_box} text-center rounded-4 shadow`}>
              <i className="ri-mail-send-line"></i>
              <h2>Email</h2>
              <p className="fs-3">asg@eyehospitals.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_card;

//*****..NOT IN USE..*****//
