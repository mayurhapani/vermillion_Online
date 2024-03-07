import "./App.css";
import "./remixicon.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/about_us/AboutUs";
import Awards from "./components/awards/Awards";
import Google from "./components/googleReview/Google";
import Services from "./components/services/Services";
import PatientReview from "./components/patientReview/PatientReview";
import Footer from "./components/footer/Footer";
import OurTeam from "./components/ourTeam/OurTeam";
import LatestNews from "./components/latestNews/LatestNews";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <AboutUs />
      <Services />
      <Google />
      <PatientReview />
      <OurTeam />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
