import { useEffect, useRef, useState } from "react";
import asset1 from "../../assets/e&w/info/asset1.jpg";
import asset2 from "../../assets/e&w/info/asset2.jpg";
import asset3 from "../../assets/e&w/info/asset3.jpg";
import asset4 from "../../assets/e&w/info/asset4.jpg";
import asset5 from "../../assets/e&w/info/asset5.jpg";

function EnWInfo() {
  return (
    <div className=" w-full md:pt-[100px] hide-scrollbar">
      <DesktopSlide />
      <Mobileslide />
    </div>
  );
}

export default EnWInfo;

function DesktopSlide() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <div className="w-full overflow-x-scroll hide-scrollbar snap-x snap-mandatory md:flex hidden">
      <div
        className="hide-scrollbar flex tr-slow cursor-pointer"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <img
          src={asset1}
          className="w-full snap-center"
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % 5);
          }}
        />
        <img
          src={asset2}
          className="w-full snap-center"
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % 5);
          }}
        />
        <img
          src={asset3}
          className="w-full snap-center"
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % 5);
          }}
        />
        <img
          src={asset4}
          className="w-full snap-center"
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % 5);
          }}
        />
        <img
          src={asset5}
          className="w-full snap-center"
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % 5);
          }}
        />
      </div>
    </div>
  );
}

function Mobileslide() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [imgHeight, setImgHeight] = useState<number | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.clientHeight);
      }
    };

    const img = imgRef.current;
    if (img && img.complete) {
      handleLoad(); // para imágenes ya cargadas (por caché)
    } else if (img) {
      img.addEventListener("load", handleLoad);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <div className="md:hidden visible flex flex-col justify-start gap-10 py-[150px]">
      <span
        className="flex justify-center items-center text-3xl"
        style={{ fontFamily: "Ittrecoleta Regular" }}
      >
        Pasta Workshops
      </span>
      <span className="w-full flex justify-center">
        <div
          className="w-[90%] overflow-y-hidden snap-mandatory snap-y hide-scrollbar"
          style={{ height: imgHeight ? `${imgHeight * 2}px` : "auto" }}
        >
          <div
            className="w-full tr-slow"
            style={{ transform: `translateY(-${currentSlide * 20}%)` }}
            onClick={() => {
              setCurrentSlide((currentSlide + 1) % 4);
            }}
          >
            <img src={asset1} className="w-full snap-start" ref={imgRef} />
            <img src={asset2} className="w-full snap-start" />
            <img src={asset3} className="w-full snap-start" />
            <img src={asset4} className="w-full snap-start" />
            <img src={asset5} className="w-full snap-start" />
          </div>
        </div>
      </span>
    </div>
  );
}
