import "./App.css";
import "./remixicon.css";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import NewsPg from "./pages/news/News_pg";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesSubPage from "./pages/servicesSub/ServicesSubPage";
import Hospital from "./pages/hospital/Hospital";
import ContactUs from "./pages/contact_us/Contact_us";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ContactFooter from "./components/footer/ContactFooter";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPg />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesSubPage />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>

      {pathname != "/contactUs" && <Footer />}
      {pathname == "/contactUs" && <ContactFooter />}
    </>
  );
}

export default App;
