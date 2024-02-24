import Image from "next/image";

import "remixicon/fonts/remixicon.css";
import Header from "./component/Header";
import Home1 from "./home/Home1";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import Help from "./component/Help";
import Footer from "./component/Footer";
import NewsLetter from "./component/NewsLetter";
import Our_Doctors from "./our_doctors/Our_Doctors";
import Contact_us from "./contact_us/Contact_us";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Home1 />
      <Services />
      <Our_Doctors />
      <Testimonial />
      <Contact_us />
      <Help />
      <NewsLetter />
      <Footer />
    </main>
  );
}
