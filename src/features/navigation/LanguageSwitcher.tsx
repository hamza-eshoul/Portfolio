import { useTranslation } from "react-i18next";
import { MdOutlineLanguage } from "react-icons/md";

const LANGUAGES = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
] as const;

interface LanguageSwitcherProps {
  className?: string;
  labelClassName?: string;
}

const LanguageSwitcher = ({
  className = "",
  labelClassName = "text-[13px]",
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <li className={`flex items-center justify-center gap-2 ${className}`}>
      <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
      {LANGUAGES.map(({ code, label }, index) => (
        <div key={code} className="flex items-center gap-2">
          {index > 0 && (
            <div className="h-3 w-[1px] bg-lightTertiaryColor"> </div>
          )}
          <span
            className={`cursor-pointer font-mono transition duration-300 ease-in-out ${labelClassName} ${
              i18n.language === code
                ? "text-secondaryColor"
                : "hover:text-lightestTertiaryColor"
            }`}
            onClick={() => changeLanguage(code)}
          >
            {label}
          </span>
        </div>
      ))}
    </li>
  );
};

export default LanguageSwitcher;
