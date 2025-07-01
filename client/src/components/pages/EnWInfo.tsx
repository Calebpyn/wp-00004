import { useState } from "react";
import asset1 from "../../assets/e&w/info/asset1.jpg";
import asset2 from "../../assets/e&w/info/asset2.jpg";
import asset3 from "../../assets/e&w/info/asset3.jpg";
import asset4 from "../../assets/e&w/info/asset4.jpg";
import asset5 from "../../assets/e&w/info/asset5.jpg";

function EnWInfo() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className=" w-full pt-[100px] hide-scrollbar">
      <div className="w-full overflow-x-scroll hide-scrollbar snap-x snap-mandatory">
        <div
          className="hide-scrollbar flex tr-slow"
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
    </div>
  );
}

export default EnWInfo;
