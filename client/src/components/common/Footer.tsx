import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full flex md:flex-row flex-col bg-black justify-around md:h-[250px] gap-7 md:gap-0 py-8 md:py-0 items-center text-white"
      style={{ fontFamily: "Ittrecoleta Regular" }}
    >
      <span className="flex flex-col w-[200px] md:gap-10 text-center md:text-left">
        <span>{t("location")}</span>
        <span>
          Ignacio Zaragoza, 5 de Febrero, 23400 San José del Cabo, B.C.S.
        </span>
      </span>
      <span className="flex flex-col w-[200px] md:gap-10 text-center md:text-left">
        <span>{t("openninghours")}</span>
        <span>
          {t("tuesdaytosunday")}
          <br />
          3:30 PM – 10:00 PM
        </span>
      </span>
      <span className="flex flex-col w-[200px] md:gap-10 text-center md:text-left">
        <span>{t("contact")}</span>
        <span>
          comeacasa.csl@gmail.com
          <br />
          +52 624 177 1536
        </span>
      </span>
      <span className="flex justify-center items-center w-[150px]">
        <FaInstagram className="text-3xl" />
      </span>
    </div>
  );
}

export default Footer;
