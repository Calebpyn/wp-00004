import vino_menu from "../../assets/menu/vino.jpg";
import cocteles_menu from "../../assets/menu/cocteles.jpg";
import entradas_menu from "../../assets/menu/entradas.jpg";
import pizza_menu from "../../assets/menu/pizza.jpeg";

import vino_menu_en from "../../assets/menu/vino_en.jpg";
import cocteles_menu_en from "../../assets/menu/cocteles_en.jpg";
import entradas_menu_en from "../../assets/menu/entradas_en.jpg";
import pizza_menu_en from "../../assets/menu/pizza_en.jpeg";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Menu() {
  const [_, setCurrentSlide] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const { i18n } = useTranslation();

  return (
    <div className="w-full min-h-screen pt-[100px]">
      <span className="w-full py-10 flex justify-center items-center">
        <span className="w-[90%] flex justify-between items-center px-5">
          <span className="hidden md:flex"></span>
          <span
            style={{ fontFamily: "Ittrecoleta Regular" }}
            className="md:text-[90px] text-3xl"
          >
            Menu
          </span>
          <span>
            <span className="flex md:gap-7 gap-5 text-sm md:text-xl items-center">
              {[0, 1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`hover:scale-120 tr cursor-pointer`}
                  onClick={() => handleSlideChange(num)}
                >
                  {num + 1}
                </button>
              ))}
            </span>
          </span>
        </span>
      </span>

      <span className="w-full flex justify-center items-center mb-[100px]">
        <div
          ref={scrollContainerRef}
          className="w-[90%] overflow-x-auto flex shadow-2xl snap-mandatory snap-x hide-scrollbar scroll-smooth"
        >
          <img
            src={i18n.language == "en" ? vino_menu_en : vino_menu}
            className="w-full snap-center flex-shrink-0"
          />
          <img
            src={i18n.language == "en" ? cocteles_menu_en : cocteles_menu}
            className="w-full snap-center flex-shrink-0"
          />
          <img
            src={i18n.language == "en" ? entradas_menu_en : entradas_menu}
            className="w-full snap-center flex-shrink-0"
          />
          <img
            src={i18n.language == "en" ? pizza_menu_en : pizza_menu}
            className="w-full snap-center flex-shrink-0"
          />
        </div>
      </span>
    </div>
  );
}

export default Menu;
