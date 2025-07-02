import { type RefObject } from "react";
import CALabel from "../common/CALabel";
import AboutUs from "../Home/AboutUs";
import HeroCarousel from "../Home/HeroCarousel";

type HomeProps = {
  aboutUsRef: RefObject<HTMLDivElement | null>;
  homeRef: RefObject<HTMLDivElement | null>;
};

const Home: React.FC<HomeProps> = ({ aboutUsRef, homeRef }) => {
  return (
    <div className="w-full bg-white flex flex-col snap-y snap-mandatory h-screen overflow-y-auto hide-scrollbar">
      <div className="w-full snap-center" ref={homeRef}>
        <HeroCarousel />
      </div>
      <div className="w-full snap-start" ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div className="w-full snap-center">
        <CALabel />
      </div>
    </div>
  );
};

export default Home;
