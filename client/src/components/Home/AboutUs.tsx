import asset1 from "../../assets/home/about-us/about-us-asset.jpg";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full md:h-screen pt-[100px] flex md:flex-row flex-col justify-center items-center"
      style={{ fontFamily: "Ittrecoleta Regular" }}
    >
      <span className="md:hidden flex my-[30px]">
        <span className="text-[32px]">{t("aboutUs-title")}</span>
      </span>
      <span className="md:w-[50%] w-[70%] h-full flex justify-end items-center md:pr-10">
        <span
          className="bg-cover bg-center w-[400px] aspect-square rounded-full"
          style={{ backgroundImage: `url(${asset1})` }}
        ></span>
      </span>
      <span className="md:w-[50%] w-[90%] md:mt-0 my-[40px] md:px-10 md:mr-20 flex flex-col justify-between md:items-start items-center text-left gap-10">
        <span className="text-[90px] hidden md:flex">{t("aboutUs-title")}</span>
        <span
          className="flex flex-col gap-5 text-[18px]"
          style={{ fontFamily: "Afacad-Regular" }}
        >
          <span>
            <text style={{ fontFamily: "Afacad-Bold" }}>
              {t("aboutUs-content-1")}
            </text>
            {t("aboutUs-content-2")}
            <br />
            {t("aboutUs-content-3")}
          </span>
          <span>
            <text style={{ fontFamily: "Afacad-Bold" }}>
              {t("aboutUs-content-4")}
            </text>
            {t("aboutUs-content-5")}
            <br />
            {t("aboutUs-content-6")}
          </span>
          <span>
            <text style={{ fontFamily: "Afacad-Bold" }}>
              {t("aboutUs-content-7")}
            </text>
            {t("aboutUs-content-8")}
            <br />
            {t("aboutUs-content-9")}
            <br />
            {t("aboutUs-content-10")}
          </span>
        </span>
      </span>
    </div>
  );
}

export default AboutUs;
