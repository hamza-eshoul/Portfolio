import { useInView } from "react-intersection-observer";

// types
import { ProjectData } from "@/types";

// components
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import WrappedProject from "./WrappedProject";

interface ProjectProps {
  data: ProjectData;
}

const Project = ({ data }: ProjectProps) => {
  // library hooks
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  // data
  const {
    isReverse,
    image,
    title,
    repoLink,
    previewLink,
    technologies,
    description,
  } = data;

  return (
    <>
      {/* Desktop version */}
      <article
        ref={ref}
        className={`${
          inView ? "fade-appear-animation" : "opacity-0"
        } relative hidden pb-[100px] xmd:block`}
      >
        <div className={`flex ${isReverse ? "flex-row-reverse" : "flex-row"}`}>
          <div className={`w-[57%] ${isReverse ? "pl-6" : "pr-6"}`}>
            <ProjectImage image={image} previewLink={previewLink} />
          </div>
          <ProjectContent
            title={title}
            description={description}
            technologies={technologies}
            repoLink={repoLink}
            previewLink={previewLink}
            isReverse={isReverse}
          />
        </div>
      </article>

      {/* Mobile version */}
      <WrappedProject
        image={image}
        title={title}
        description={description}
        technologies={technologies}
        repoLink={repoLink}
        previewLink={previewLink}
      />
    </>
  );
};

export default Project;
