import { HashRouter, Route, Routes } from "react-router-dom";

//Components
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import { useRef } from "react";
import FAQS from "./components/pages/FAQS";
import EnW from "./components/pages/EnW";
import Reservations from "./components/pages/Reservations";
import EnWInfo from "./components/pages/EnWInfo";

function App() {
  const aboutUsRef = useRef<HTMLDivElement>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HashRouter>
      <div className="bg-black w-full flex justify-center items-start h-screen overflow-y-auto hide-scrollbar ">
        <div className="max-w-[1920px] w-full bg-white relative flex flex-col">
          <Header
            onAboutUsClick={handleScrollToAboutUs}
            onHomeClick={handleScrollToHome}
          />
          <div className="w-full snap-center">
            <Routes>
              <Route
                path="/"
                element={<Home homeRef={homeRef} aboutUsRef={aboutUsRef} />}
              />
              <Route path="/menu" element={<Menu />} />
              <Route path="/faqs" element={<FAQS />} />
              <Route path="/e&w" element={<EnW />} />
              <Route path="/e&w/info" element={<EnWInfo />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
