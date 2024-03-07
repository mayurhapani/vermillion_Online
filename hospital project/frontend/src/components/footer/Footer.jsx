import React from "react";
import Style from "./footer.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/footerLogo.png";
import GetInTouch from "../getInTouch/GetInTouch";

export default function Footer() {
  return (
    <footer className={Style.footerOuter}>
      <div className="container">
        <div className={Style.footer}>
          <GetInTouch />
          <div className="row">
            <div className="col-4">
              <img className="mt-5" src={logo} alt="" />
              <p className="text my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text
              </p>
              <ul className={Style.socIcon}>
                <li>
                  <i className="ri-instagram-line"></i>
                </li>
                <li>
                  <i className="ri-facebook-fill"></i>
                </li>
                <li>
                  <i className="ri-facebook-fill"></i>
                  {/* <i className="ri-xrp-fill"></i> */}
                </li>
                <li>
                  <i className="ri-linkedin-fill"></i>
                </li>
                <li>
                  <i className="ri-youtube-fill"></i>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <div className="text-light mt-5">
                <div className="row">
                  <div className="col-3 mt-4">
                    <ul className={Style.footerLink}>
                      <li className="mb-5">Quick Links</li>
                      <li>About Us</li>
                      <li>Hospitals</li>
                      <li>Specialities</li>
                      <li>Blog & News</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="col-4 mt-4">
                    <ul className={Style.footerLink1}>
                      <li className="mb-5">Contact Info</li>

                      <li className="text ms-5 position-relative">
                        <i className={`ri-phone-line ${Style.icon1}`}></i> Phone No.
                      </li>
                      <li className="ms-5 mb-5">(+91) 1800 1200 111</li>
                      <li className="text ms-5 position-relative">
                        <i className={`ri-mail-line ${Style.icon1}`}></i>Email
                      </li>
                      <li className="ms-5">asg@eyehospitals.com</li>
                    </ul>
                  </div>
                  <div className="col-5">
                    <ul>
                      <li>Contact Info</li>
                      <li>
                        <div id="map"></div>
                        {/* <gmp-map center="37.4220656,-122.0840897" zoom="10" map-id="DEMO_MAP_ID"></gmp-map> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
