import { useTranslation } from "react-i18next";
import asset1 from "../../assets/common/ca_logo.png";

function CALabel() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#EDE4DD] py-5 flex justify-center items-center flex-col gap-5">
      <span>
        <img src={asset1} className="h-[80px]" />
      </span>
      <span
        style={{ fontFamily: "Afacad-Bold" }}
        className="uppercase text-[#8A5847]"
      >
        {t("culinary-awards")}
      </span>
    </div>
  );
}

export default CALabel;
