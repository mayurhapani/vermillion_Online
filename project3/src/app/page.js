import Image from "next/image";

import "remixicon/fonts/remixicon.css";
import Header from "./component/Header";
import Home1 from "./home/Home1";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import Help from "./component/Help";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Home1 />
      <Services />
      <Testimonial />
      <Help />
    </main>
  );
}
