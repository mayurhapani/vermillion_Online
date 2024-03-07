import "./App.css";
import "./remixicon.css";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <AboutPage />
    </>
  );
}

export default App;
