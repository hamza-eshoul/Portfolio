import { useTranslation } from "react-i18next";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";
import { ProjectDescriptionData } from "@/types";

// components
import ProjectDescription from "./ProjectDescription";

interface ProjectContentProps {
  title: string;
  description: ProjectDescriptionData;
  technologies: string[];
  repoLink: string;
  previewLink: string;
  isReverse: boolean;
}

const ProjectContent = ({
  title,
  description,
  technologies,
  repoLink,
  previewLink,
  isReverse,
}: ProjectContentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`z-10 flex w-1/2 flex-col ${
        isReverse ? "items-start" : "items-end"
      } gap-5 xl:pt-10`}
    >
      <div
        className={`flex flex-col ${
          isReverse ? "items-start" : "items-end"
        } gap-2`}
      >
        <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
          {t("projects.featuredProject")}
        </h3>
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
        >
          {title}
        </a>
      </div>
      <div
        className={`rounded bg-lightPrimaryColor px-6 py-6 text-justify text-[18px] text-lightTertiaryColor ${
          isReverse ? "" : "xl:pl-12"
        }`}
      >
        <p className="fade-in-animation">
          <ProjectDescription
            text={description.text}
            highlight={description.highlight}
          />
        </p>
      </div>
      <ul
        className={`z-10 flex w-full flex-wrap ${
          isReverse ? "justify-start" : "justify-end"
        } gap-3 pt-2 font-mono text-[13px] text-lightTertiaryColor`}
      >
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <ul className="flex gap-3">
        <li>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <FiGithub className="project-links" />
          </a>
        </li>
        <li>
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            <PiArrowSquareOut className="project-links" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectContent;
