import React from "react";
import Style from "./footer.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/footerLogo.png";

export default function Footer() {
  return (
    <footer className={Style.footerOuter}>
      <div className="container">
        <div className={Style.footer}>
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
              <div className="text-light">
                <div className="row">
                  <div className="col-3">
                    <ul>
                      <li>Quick Links</li>
                      <li>About Us</li>
                      <li>Hospitals</li>
                      <li>Specialities</li>
                      <li>Blog & News</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul>
                      <li>Contact Info</li>
                      <li>Phone No.</li>
                      <li>(+91) 1800 1200 111</li>
                      <li>Email</li>
                      <li>asg@eyehospitals.com</li>
                    </ul>
                  </div>
                  <div className="col-5">
                    <ul>
                      <li>Contact Info</li>
                      <li>
                        <gmp-map center="37.4220656,-122.0840897" zoom="10" map-id="DEMO_MAP_ID"></gmp-map>
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
