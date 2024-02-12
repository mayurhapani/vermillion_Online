"use client";

// import React, { useState } from "react";
// import Style from "../styles/Header.module.css";

// import Image from "next/image";
// import Logo from "../../../public/logo.png";
// import Button from "./Button";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header className={Style.headerMain}>
//       <div className="container mx-auto">
//         <div className={Style.headerDiv}>
//           <Image src={Logo} alt="lodding..." />
//           <i className="ri-bar-chart-horizontal-line sm:hidden text-2xl cursor-pointer pe-5" onClick={toggleMenu}></i>

//           <nav className={`sm:block ${showMenu ? "block" : "hidden"}`}>
//             <ul className={`${Style.navUl} ${showMenu ? "flex flex-col" : ""}`}>
//               <li className={Style.navLink}>Home</li>
//               <li className={Style.navLink}>About</li>
//               <li className={Style.navLink}>Medical Services</li>
//               <li className={Style.navLink}>Career</li>
//               <li className={Style.navLink}>News</li>
//               <li className={Style.navLink}>Contact</li>
//             </ul>
//           </nav>
//           <div className={`${Style.btnDiv} hidden sm:flex`}>
//             <i className="ri-map-pin-user-line me-2 text-[2.5rem] text-[#385182]"></i>
//             <Button text="Mack Appointment" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import Style from "../styles/Header.module.css";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import Button from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={Style.headerMain}>
      <div className="container mx-auto">
        <div className={`${Style.headerDiv} relative`}>
          <Image src={Logo} alt="lodding..." />
          <i className="ri-bar-chart-horizontal-line sm:hidden text-2xl cursor-pointer pe-5" onClick={toggleMenu}></i>

          <nav className={`${menuOpen ? "block" : "hidden"} sm:hidden z-20 bg-[#5577e6] text-white absolute top-20 right-0`}>
            <ul className={`${Style.navUl} ${menuOpen ? "flex flex-col" : ""}`}>
              <li className={`${Style.navLink2} `}>Home</li>
              <li className={Style.navLink2}>About</li>
              <li className={Style.navLink2}>Medical Services</li>
              <li className={Style.navLink2}>Career</li>
              <li className={Style.navLink2}>News</li>
              <li className={Style.navLink2}>Contact</li>
            </ul>
          </nav>
          <nav className={`hidden sm:block`}>
            <ul className={Style.navUl}>
              <li className={Style.navLink}>Home</li>
              <li className={Style.navLink}>About</li>
              <li className={Style.navLink}>Medical Services</li>
              <li className={Style.navLink}>Career</li>
              <li className={Style.navLink}>News</li>
              <li className={Style.navLink}>Contact</li>
            </ul>
          </nav>
          <div className={`${Style.btnDiv} hidden sm:flex`}>
            <i className="ri-map-pin-user-line me-2 text-[2.5rem] text-[#385182]"></i>
            <Button text="Mack Appointment" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import Style from "../styles/Header.module.css";

// import Image from "next/image";
// import Logo from "../../../public/logo.png";
// import Button from "./Button";

// const Header = () => {
//   return (
//     <header className={Style.headerMain}>
//       <div className="container mx-auto">
//         <div className={Style.headerDiv}>
//           <Image src={Logo} alt="lodding..." />
//           <i class="ri-bar-chart-horizontal-line sm:hidden text-2xl cursor-pointer pe-5"></i>

//           <nav className="hidden sm:block">
//             <ul className={Style.navUl}>
//               <li className={Style.navLink}>Home</li>
//               <li className={Style.navLink}>About</li>
//               <li className={Style.navLink}>Medical Services</li>
//               <li className={Style.navLink}>Career</li>
//               <li className={Style.navLink}>News</li>
//               <li className={Style.navLink}>Contact</li>
//             </ul>
//           </nav>
//           <div className={`${Style.btnDiv} hidden sm:flex`}>
//             <i class="ri-map-pin-user-line me-2 text-[2.5rem] text-[#385182]"></i>
//             <Button text="Mack Appointment" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
