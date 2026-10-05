import { useTranslation } from "react-i18next";

const CV_URLS = {
  en: "/cv/Hamza-Eshoul-Full-Stack-Developer-Resume.pdf",
  fr: "/cv/CV_Hamza_Eshoul.pdf",
} as const;

interface ResumeButtonProps {
  containerClassName: string;
  buttonClassName: string;
}

const ResumeButton = ({
  containerClassName,
  buttonClassName,
}: ResumeButtonProps) => {
  const { t, i18n } = useTranslation();

  const cvUrl = i18n.language === "en" ? CV_URLS.en : CV_URLS.fr;

  return (
    <li className={`group relative ${containerClassName}`}>
      <a href={cvUrl} target="_blank" rel="noopener noreferrer">
        <button
          className={`absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1 ${buttonClassName}`}
        >
          {t("navbar.cv")}
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </a>
    </li>
  );
};

export default ResumeButton;
