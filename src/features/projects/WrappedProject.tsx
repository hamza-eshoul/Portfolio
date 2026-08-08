import { useInView } from "react-intersection-observer";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { ProjectDescriptionData } from "@/types";

// components
import ProjectDescription from "./ProjectDescription";

interface WrappedProjectProps {
  image: string;
  title: string;
  description: ProjectDescriptionData;
  technologies: string[];
  repoLink: string;
  previewLink: string;
}

const WrappedProject = ({
  image,
  title,
  description,
  technologies,
  repoLink,
  previewLink,
}: WrappedProjectProps) => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } relative mb-[70px] rounded bg-lightPrimaryColor p-5 pb-[15px] xsm:p-10 xsm:pb-[30px] xmd:hidden`}
    >
      <div className="py-2.5 xsm:py-[6%]">
        <div className="flex h-full flex-col gap-5 xl:pt-10">
          <div className="flex flex-col gap-2">
            <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
              {t("projects.featuredProject")}
            </h3>
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
            >
              {title}
            </a>
          </div>
          <p className="text-justify text-[18px] text-lightTertiaryColor">
            <ProjectDescription
              text={description.text}
              highlight={description.highlight}
            />
          </p>
          <ul className="z-10 flex w-full flex-wrap gap-3 pb-3 pt-2 font-mono text-[13px] text-lightestTertiaryColor">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <ul className="z-10 flex gap-3">
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
      </div>
      <div className="group absolute left-0 top-0 h-full w-full cursor-pointer opacity-10">
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="before relative z-[1] block h-full w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:w-full before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
        >
          <div className="constrast-100 h-full rounded-md mix-blend-multiply brightness-90 grayscale transition duration-300 ease-in-out group-hover:brightness-100 group-hover:grayscale-0">
            <div className="block h-full">
              <img
                className="static bottom-0 left-0 right-0 top-0 block h-full w-full rounded-md"
                src={image}
                alt={title}
              />
            </div>
            <img
              src={image}
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-md"
              alt={title}
            />
          </div>
        </a>
      </div>
    </article>
  );
};

export default WrappedProject;
