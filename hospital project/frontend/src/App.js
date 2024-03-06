import "./App.css";
import "./remixicon.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About_us from "./components/about_us/About_us";
import Awards from "./components/awards/Awards";
import Google from "./components/googleReview/Google";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <About_us />
      <Google />
    </>
  );
}

export default App;
