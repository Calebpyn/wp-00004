import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";

//Components
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import { useRef } from "react";

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
      <div className="bg-black w-full flex justify-center items-start hide-scrollbar">
        <div className="max-w-[1920px] w-full bg-white relative flex flex-col hide-scrollbar">
          <Header
            onAboutUsClick={handleScrollToAboutUs}
            onHomeClick={handleScrollToHome}
          />
          <Routes>
            <Route
              path="/"
              element={<Home homeRef={homeRef} aboutUsRef={aboutUsRef} />}
            />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
