import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import NoteworthyProject from "./NoteworthyProject";

interface NoteworthyProject {
  title: string;
  repoLink: string;
  previewLink?: string;
  technologies: string[];
  description: string;
}

const noteworthy_projects_list: NoteworthyProject[] = [
  {
    title: "Members Only",
    repoLink: "https://github.com/hamza-eshoul/Odin-Members-Only-Project",
    previewLink: "https://odin-members-only-project-skynter.onrender.com/",
    technologies: ["Express.js", "MongoDB", "EJS", "Passport.js"],
    description: "noteworthyProjects.membersOnly.description",
  },
  {
    title: "Battleship Game",
    repoLink: "https://github.com/hamza-eshoul/Battleship",
    previewLink: "https://hamza-eshoul.github.io/Battleship/",
    technologies: ["HTML, CSS, JavaScript, Jest"],
    description: "noteworthyProjects.battleship.description",
  },
  {
    title: "Where's Waldo",
    repoLink: "https://github.com/skynter/Where-s-Waldo",
    previewLink: "https://photo-tagging-app-ad275.web.app/",
    technologies: ["React, Tailwind CSS", "Firebase"],
    description: "noteworthyProjects.wheresWaldo.description",
  },
  {
    title: "CV Application",
    repoLink: "https://github.com/hamza-eshoul/React-Cv-Project",
    previewLink: "https://cv-generator-vezb.onrender.com",
    technologies: ["React, Tailwind CSS"],
    description: "noteworthyProjects.cvApplication.description",
  },
  {
    title: "Memory Card Game",
    repoLink: "https://github.com/hamza-eshoul/Memory-Card-Project",
    previewLink: "https://odin-memory-card.onrender.com/",
    technologies: ["React, Tailwind CSS"],
    description: "noteworthyProjects.memoryCard.description",
  },
  {
    title: "Binary Search Trees",
    repoLink: "https://github.com/hamza-eshoul/Binary-Search-Trees",
    technologies: ["JavaScript"],
    description: "noteworthyProjects.binarySearchTrees.description",
  },
];

const NoteworthyProjects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="py-[60px] xsm:py-[80px] xmd:py-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        <h2 className="fade-in-animation numbered-headings pb-12 text-center">
          {t("noteworthyProjects.title")}
        </h2>
      </header>

      <section className="noteworthy-projects-grid">
        {noteworthy_projects_list.map((project, index) => (
          <NoteworthyProject key={index} data={project} />
        ))}
      </section>
    </section>
  );
};

export default NoteworthyProjects;
