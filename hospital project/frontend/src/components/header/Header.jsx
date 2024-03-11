import React from "react";
import logo from "../../assets/images/h_logo.png";
import Style from "./header.module.css";
import Buttonn from "../button/Button";

const Header = () => {
  return (
    <header className={`${Style.headerOuter} px-5 mt-3 position-fixed top-0`}>
      <div className={`${Style.header} container d-flex justify-content-between align-items-center py-3 px-5 rounded-4`}>
        <img width="270px" height="47px" src={logo} alt="Logo" />
        <ul className="d-flex list-unstyled mb-0">
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/">
              Home
            </a>
          </li>
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/about">
              About
            </a>
          </li>
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/hospital">
              Hospital
            </a>
          </li>
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/services">
              Specialities
            </a>
          </li>
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/news">
              Blog
            </a>
          </li>
          <li className={`${Style.header_li} py-2 px-3`}>
            <a className="text-decoration-none text-dark" href="/contactUs">
              Contact
            </a>
          </li>
        </ul>
        <Buttonn isHide={true} btn_title={"Book an Appointment"} />
      </div>
    </header>
  );
};

export default Header;
