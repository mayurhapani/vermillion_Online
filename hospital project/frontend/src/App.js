import "./App.css";
import "./remixicon.css";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import News_pg from "./pages/news/News_pg";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesSubPage from "./pages/servicesSub/ServicesSubPage";
import Hospital from "./pages/hospital/Hospital";
import Contact_us from "./pages/contact_us/Contact_us";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<News_pg />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicesSubPage />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/contactUs" element={<Contact_us />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <AboutPage /> */}
      {/* <News_pg /> */}
      {/* <ServicesPage /> */}
      {/* <ServicesSubPage /> */}
      {/* <Hospital /> */}
      {/* <Contact_us /> */}
    </>
  );
}

export default App;
