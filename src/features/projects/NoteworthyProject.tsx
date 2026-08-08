import { useInView } from "react-intersection-observer";

// icons
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";
import { useTranslation } from "react-i18next";

interface NoteworthyProjectProps {
  data: {
    title: string;
    repoLink: string;
    previewLink?: string;
    technologies: string[];
    description: string;
  };
}

const NoteworthyProject = ({ data }: NoteworthyProjectProps) => {
  // library hooks
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  // data
  const { title, repoLink, previewLink, technologies, description } = data;

  const cardLink = previewLink ? previewLink : repoLink;

  return (
    <article
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } group relative rounded bg-lightPrimaryColor p-8 transition duration-200 ease-in-out hover:-translate-y-1.5`}
    >
      <header className="flex items-center justify-between pb-[35px]">
        <AiOutlineFolder className="text-[45px] text-secondaryColor" />
        <ul className="relative z-20 flex gap-3">
          <li>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <FiGithub className="noteworthy-project-links text-[20px]" />
            </a>
          </li>
          {previewLink && (
            <li>
              <a href={previewLink} target="_blank" rel="noopener noreferrer">
                <PiArrowSquareOut className="noteworthy-project-links" />
              </a>
            </li>
          )}
        </ul>
      </header>

      <h3 className="pb-2.5 text-[22px] font-semibold text-lightestTertiaryColor group-hover:text-secondaryColor">
        <a
          href={cardLink}
          target="_blank"
          rel="noopener noreferrer"
          className="before:absolute before:inset-0 before:z-10 before:content-['']"
        >
          {title}
        </a>
      </h3>

      <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
        {t(description)}
      </p>

      <ul className="flex w-full flex-wrap gap-3 pt-5 font-mono text-[12px]">
        {technologies &&
          technologies.map((technology) => (
            <li key={technology}> {technology}</li>
          ))}
      </ul>
    </article>
  );
};

export default NoteworthyProject;
