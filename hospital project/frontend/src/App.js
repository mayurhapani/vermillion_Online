import "./App.css";
import "./remixicon.css";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesSubPage from "./pages/servicesSub/ServicesSubPage";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <AboutPage /> */}
      {/* <ServicesPage /> */}
      <ServicesSubPage />
    </>
  );
}

export default App;
