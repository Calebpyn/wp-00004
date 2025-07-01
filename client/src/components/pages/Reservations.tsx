import asset1 from "../../assets/reservations/asset1.png";
import asset2 from "../../assets/reservations/asset2.png";

import { useTranslation } from "react-i18next";

function Reservations() {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-full flex justify-center items-center flex-col gap-10 pt-[140px] pb-10"
      style={{ fontFamily: "Ittrecoleta Regular" }}
    >
      <span className="md:text-7xl text-4xl">{t("reservations")}</span>
      <span className="flex md:gap-32 gap-5">
        <img src={asset1} className="md:h-[450px] h-[200px]" />
        <img src={asset2} className="md:h-[450px] h-[200px]" />
      </span>
      <span>
        <button className="bg-[#1E1E1E] rounded-full md:text-[30px] text-[25px] text-white px-8 py-2 hover:scale-105 tr cursor-pointer ">
          {t("book-your-table")}
        </button>
      </span>
    </div>
  );
}

export default Reservations;
