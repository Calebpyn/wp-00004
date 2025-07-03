import vino_menu from "../../assets/menu/vino.jpg";
import cocteles_menu from "../../assets/menu/cocteles.jpg";
import entradas_menu from "../../assets/menu/entradas.jpg";
import { useRef, useState } from "react";

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
          <img src={vino_menu} className="w-full snap-center flex-shrink-0" />
          <img
            src={cocteles_menu}
            className="w-full snap-center flex-shrink-0"
          />
          <img
            src={entradas_menu}
            className="w-full snap-center flex-shrink-0"
          />
          <img
            src={entradas_menu}
            className="w-full snap-center flex-shrink-0"
          />
        </div>
      </span>
    </div>
  );
}

export default Menu;
