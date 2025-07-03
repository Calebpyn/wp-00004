import { useTranslation } from "react-i18next";
import logo from "../../assets/common/logo.svg";
import i18next, { changeLanguage } from "i18next";
import { useNavigate } from "react-router-dom";
import { forwardRef, useEffect, useRef, useState } from "react";

type HeaderProps = {
  onAboutUsClick: () => void;
  onHomeClick: () => void;
};

const toggleLang = () => {
  if (i18next.language == "en") {
    changeLanguage("es");
  } else if (i18next.language == "es") {
    changeLanguage("en");
  }
};

const Header: React.FC<HeaderProps> = ({ onAboutUsClick, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full md:h-[100px] h-[100px] bg-white flex justify-between items-center md:px-10 px-5 shadow-2xl left-0 z-[999] ">
      <span
        onClick={() => {
          navigate("/");
          onHomeClick();
        }}
        className="cursor-pointer"
      >
        <img src={logo} className="md:w-[200px] w-[120px]" />
      </span>

      <DesktopHeaderView
        onAboutUsClick={onAboutUsClick}
        onHomeClick={onHomeClick}
      />
      <MobileMenuToggle toggleMenu={handleMobileMenuToggle} />

      <MobileHeaderView
        toggleMenu={handleMobileMenuToggle}
        isOpen={isOpen}
        onAboutUsClick={onAboutUsClick}
        onHomeClick={onHomeClick}
        ref={mobileMenuRef}
      />
    </div>
  );
};

export default Header;

type MobileMenuToggleProps = {
  toggleMenu: () => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ toggleMenu }) => {
  return (
    <div
      className="md:hidden flex flex-col gap-2 hover:scale-110 tr"
      onClick={toggleMenu}
    >
      <div className="w-[30px] h-[2px] bg-black"></div>
      <div className="w-[30px] h-[2px] bg-black"></div>
      <div className="w-[30px] h-[2px] bg-black"></div>
    </div>
  );
};

type MobileHeaderViewProps = HeaderProps & {
  isOpen: boolean;
  toggleMenu: () => void;
};
const MobileHeaderView = forwardRef<HTMLDivElement, MobileHeaderViewProps>(
  ({ onAboutUsClick, onHomeClick, isOpen, toggleMenu }, ref) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
      <div
        className={`w-[60%] h-screen bg-[#EDE4DD] absolute top-0 right-0 pt-[100px] flex flex-col p-5 gap-5 items-start tr justify-start ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
        style={{ fontFamily: "Ittrecoleta Regular" }}
        ref={ref}
      >
        <button
          onClick={toggleLang}
          className="cursor-pointer hover:scale-110 tr"
        >
          ESP <span className="font-sans">|</span> EN
        </button>
        <button
          className="cursor-pointer hover:scale-110 tr"
          onClick={() => {
            navigate("/");
            onHomeClick();
            toggleMenu();
          }}
        >
          {t("home")}
        </button>

        <button
          className="cursor-pointer hover:scale-110 tr"
          onClick={() => {
            navigate("/");
            onAboutUsClick();
            toggleMenu();
          }}
        >
          {t("aboutUs")}
        </button>
        <button
          className="cursor-pointer hover:scale-110 tr"
          onClick={() => {
            navigate("/menu");
            toggleMenu();
          }}
        >
          {t("menu")}
        </button>
        <button
          className="cursor-pointer hover:scale-110 tr"
          onClick={() => {
            navigate("/reservations");
            toggleMenu();
          }}
        >
          {t("reservations")}
        </button>
        <button
          className="cursor-pointer hover:scale-110 tr text-left"
          onClick={() => {
            navigate("/e&w");
            toggleMenu();
          }}
        >
          {t("e")}
          <span className="font-serif"> & </span>
          {t("w")}
        </button>
        <button
          className="cursor-pointer hover:scale-110 tr"
          onClick={() => {
            navigate("/faqs");
            toggleMenu();
          }}
        >
          {t("faq")}
          <span className="font-sans">'</span>
          {t("s")}
        </button>
      </div>
    );
  }
);

const DesktopHeaderView: React.FC<HeaderProps> = ({
  onAboutUsClick,
  onHomeClick,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <span
      className="md:flex items-center gap-10 text-xl hidden"
      style={{ fontFamily: "Ittrecoleta Regular" }}
    >
      <button
        onClick={toggleLang}
        className="cursor-pointer hover:scale-110 tr"
      >
        ESP <span className="font-sans">|</span> EN
      </button>
      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/");
          onHomeClick();
        }}
      >
        {t("home")}
      </button>

      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/");
          onAboutUsClick();
        }}
      >
        {t("aboutUs")}
      </button>
      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/menu");
        }}
      >
        {t("menu")}
      </button>
      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/reservations");
        }}
      >
        {t("reservations")}
      </button>
      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/e&w");
        }}
      >
        {t("e")}
        <text className="font-serif"> & </text>
        {t("w")}
      </button>
      <button
        className="cursor-pointer hover:scale-110 tr"
        onClick={() => {
          navigate("/faqs");
        }}
      >
        {t("faq")}
        <span className="font-sans">'</span>
        {t("s")}
      </button>
    </span>
  );
};
