import { useTranslation } from "react-i18next";

interface ProjectDescriptionProps {
  text: string;
  highlight: string;
}

const ProjectDescription = ({ text, highlight }: ProjectDescriptionProps) => {
  const { t } = useTranslation();

  const translatedHighlight = t(highlight);
  const [before, after] = t(text).split(translatedHighlight);

  return (
    <>
      {before}
      <span className="text-secondaryColor">{translatedHighlight}</span>
      {after}
    </>
  );
};

export default ProjectDescription;
