import DriveEmbed from "../common/DriveEmbed";

import vino_menu from "../../assets/menu/vino.jpg";
import cocteles_menu from "../../assets/menu/cocteles.jpg";
import entradas_menu from "../../assets/menu/entradas.jpg";
import { useState } from "react";

function Menu() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="w-full min-h-screen pt-[100px]">
      <span className="w-full py-10 flex justify-center items-center">
        <span className="w-[90%] flex justify-between items-center">
          <span></span>
          <span
            style={{ fontFamily: "Ittrecoleta Regular" }}
            className="text-[90px]"
          >
            Menu
          </span>
          <span>
            <span className="flex gap-7 items-center">
              <button
                className={`hover:scale-120 tr cursor-pointer`}
                onClick={() => {
                  setCurrentSlide(0);
                }}
              >
                1
              </button>
              <button
                className={`hover:scale-120 tr cursor-pointer`}
                onClick={() => {
                  setCurrentSlide(1);
                }}
              >
                2
              </button>
              <button
                className={`hover:scale-120 tr cursor-pointer`}
                onClick={() => {
                  setCurrentSlide(2);
                }}
              >
                3
              </button>
              <button
                className={`hover:scale-120 tr cursor-pointer`}
                onClick={() => {
                  setCurrentSlide(3);
                }}
              >
                4
              </button>
            </span>
          </span>
        </span>
      </span>

      <span className="w-full flex justify-center items-center mb-[100px]">
        <div className="w-[90%] overflow-x-auto flex shadow-2xl snap-mandatory snap-x hide-scrollbar">
          <div
            className="w-full flex tr-slow"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={vino_menu} className="w-full snap-center" />
            <img src={cocteles_menu} className="w-full snap-center" />
            <img src={entradas_menu} className="w-full snap-center" />
            <img src={entradas_menu} className="w-full snap-center" />
          </div>
        </div>
      </span>
    </div>
  );
}

export default Menu;
