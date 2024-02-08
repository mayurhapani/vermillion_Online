import Image from "next/image";

import "remixicon/fonts/remixicon.css";

import Header from "./component/Header";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
    </main>
  );
}
