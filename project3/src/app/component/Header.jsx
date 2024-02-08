import React from "react";
import Style from "../styles/Header.module.css";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <header className={Style.headerMain}>
      <div className="container mx-auto">
        <div className={Style.headerDiv}>
          <Image src={Logo} alt="lodding..." />
          <nav>
            <ul className={Style.navUl}>
              <li className={Style.navLink}>Home</li>
              <li className={Style.navLink}>About</li>
              <li className={Style.navLink}>Medical Services</li>
              <li className={Style.navLink}>Career</li>
              <li className={Style.navLink}>News</li>
              <li className={Style.navLink}>Contact</li>
            </ul>
          </nav>
          <div className={Style.btnDiv}>
            <i class="ri-map-pin-user-line text-[2.5rem] text-[#385182]"></i>
            <Button text="Mack Appointment" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
