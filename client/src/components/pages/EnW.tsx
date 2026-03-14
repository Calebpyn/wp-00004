import { useTranslation } from "react-i18next";
import bg1 from "../../assets/e&w/bg1.jpg";
import bg2 from "../../assets/e&w/bg2.jpg";
import bg3 from "../../assets/e&w/bg3.jpg";
import bg4 from "../../assets/e&w/bg4.jpg";
import { useNavigate } from "react-router-dom";

function EnW() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* fondo carrusel */}
      <div className="absolute top-0 left-0 h-full w-full overflow-x-auto flex hide-scrollbar z-0 snap-mandatory snap-x md:snap-none">
        <div className="flex h-full">
          <div
            className="bg-cover bg-center md:w-[60vw] w-[100vw] h-full flex-shrink-0 snap-center"
            style={{ backgroundImage: `url(${bg1})` }}
          ></div>
          <div
            className="bg-cover bg-center md:w-[40vw] w-[100vw] h-full flex-shrink-0 snap-center"
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>
          <div
            className="bg-cover bg-center md:w-[50vw] w-[100vw] h-full flex-shrink-0 snap-center"
            style={{ backgroundImage: `url(${bg3})` }}
          ></div>
          <div
            className="bg-cover bg-center md:w-[50vw] w-[100vw] h-full flex-shrink-0 snap-center"
            style={{ backgroundImage: `url(${bg4})` }}
          ></div>
        </div>
      </div>

      {/* overlay de texto */}
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-24 pt-[100px] z-10 pointer-events-none"
        style={{ fontFamily: "Ittrecoleta Regular" }}
      >
        <span className="flex flex-col justify-center items-center gap-5">
          <span className="md:text-8xl text-4xl text-white text-center md:leading-[74px]">
            {t("e&w-title-1")}
            <text className="font-serif"> &</text>
            <br />
            {t("e&w-title-2")}
          </span>
          <span className="text-white text-center md:text-3xl text-xl">
            {t("e&w-subtitle-1")}
            <br />
            {t("e&w-subtitle-2")}
            <br />
            {t("e&w-subtitle-3")}
          </span>
        </span>
        <span>
          <button
            className="bg-[#1E1E1E] rounded-full text-[30px] text-white px-8 py-2 hover:scale-105 tr cursor-pointer pointer-events-auto"
            onClick={() => {
              navigate("info");
            }}
          >
            {t("more-info")}
          </button>
        </span>
      </div>
    </div>
  );
}
export default EnW;
