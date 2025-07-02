import { useTranslation } from "react-i18next";
import bg1 from "../../assets/home/bg1.jpg";
import bg2 from "../../assets/home/bg2.jpg";
import bg3 from "../../assets/home/bg3.jpg";
import bg4 from "../../assets/home/bg4.jpg";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import myVideo from "../../assets/home/video1.mp4";
import { VscMute, VscUnmute } from "react-icons/vsc";

function HeroCarousel() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const setCurrentPageProp = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % 5); // Si tienes 5 slides
      // Esto imprime el valor correcto, si lo necesitas para debug:
      console.log("Current page updated");
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full pt-[100px] relative">
      <div className="w-full h-full flex flex-col justify-between items-center absolute top-0 pt-[100px] pointer-events-none z-[99]">
        <div></div>
        <div
          className="text-white md:text-6xl text-4xl"
          style={{ fontFamily: "Ittrecoleta Regular" }}
        >
          {t("welcomeHome")}
        </div>
        <div className="w-full flex justify-between">
          <span></span>
          <Controls current={currentPage} setCurrent={setCurrentPageProp} />
          <span></span>
        </div>
      </div>

      <div className="h-full flex overflow-x-auto hide-scrollbar snap-mandatory snap-x">
        <div
          className={`flex h-full w-full  tr-slow`}
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          <div
            className="h-full min-w-full bg-cover bg-center snap-center"
            style={{ backgroundImage: `url(${bg1})` }}
          ></div>
          <div
            className="h-full min-w-full bg-cover bg-center snap-center"
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>
          <div className="h-full min-w-full bg-cover bg-center snap-center">
            <VideoBanner />
          </div>
          <div
            className="h-full min-w-full bg-cover bg-center snap-center"
            style={{ backgroundImage: `url(${bg3})` }}
          ></div>
          <div
            className="h-full min-w-full bg-cover bg-center snap-center"
            style={{ backgroundImage: `url(${bg4})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;

type ControlsType = {
  current: number;
  setCurrent: (value: number) => void;
};

const Controls: React.FC<ControlsType> = ({ current, setCurrent }) => {
  return (
    <div className="flex py-10 gap-2 pointer-events-auto">
      <span
        className={`w-[8px] h-[8px] rounded-full hover:scale-110 tr hover:bg-[#ffffff] cursor-pointer ${
          current == 0 ? "bg-[#ffffff]" : "bg-[#ffffff50]"
        }`}
        onClick={() => setCurrent(0)}
      ></span>
      <span
        className={`w-[8px] h-[8px] rounded-full hover:scale-110 tr hover:bg-[#ffffff] cursor-pointer ${
          current == 1 ? "bg-[#ffffff]" : "bg-[#ffffff50]"
        }`}
        onClick={() => setCurrent(1)}
      ></span>
      <span
        className={`w-[8px] h-[8px] rounded-full hover:scale-110 tr hover:bg-[#ffffff] cursor-pointer ${
          current == 2 ? "bg-[#ffffff]" : "bg-[#ffffff50]"
        }`}
        onClick={() => setCurrent(2)}
      ></span>
      <span
        className={`w-[8px] h-[8px] rounded-full hover:scale-110 tr hover:bg-[#ffffff] cursor-pointer ${
          current == 3 ? "bg-[#ffffff]" : "bg-[#ffffff50]"
        }`}
        onClick={() => setCurrent(3)}
      ></span>
      <span
        className={`w-[8px] h-[8px] rounded-full hover:scale-110 tr hover:bg-[#ffffff] cursor-pointer ${
          current == 4 ? "bg-[#ffffff]" : "bg-[#ffffff50]"
        }`}
        onClick={() => setCurrent(4)}
      ></span>
    </div>
  );
};

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Autoplay al montar
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      if (isMuted) {
        video.muted = false;
        setIsMuted(false);
      } else {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={myVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={handleUnmute}
        className="absolute bottom-5 left-5  tr hover:scale-110 cursor-pointer text-white text-3xl px-4 py-2"
      >
        {isMuted ? <VscMute /> : <VscUnmute />}
      </button>
    </div>
  );
};
