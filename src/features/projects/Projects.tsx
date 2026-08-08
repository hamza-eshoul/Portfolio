import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { RiFolderInfoLine } from "react-icons/ri";
import Project from "./Project";
import { ProjectData } from "@/types";

const projects_list: ProjectData[] = [
  {
    isReverse: false,
    image:
      "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728740228/personal_portfolio/odinBook_dqeu5z.png",
    title: "Odin Book",
    repoLink: "https://github.com/hamza-eshoul/Odin-Book",
    previewLink: "https://odin-book-project.onrender.com/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    description: {
      text: "projects.odinBook.description",
      highlight: "projects.odinBook.highlight",
    },
  },
  {
    isReverse: true,
    image:
      "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728740227/personal_portfolio/messagingApp_mdy6gj.png",
    title: "Messaging App",
    repoLink: "https://github.com/hamza-eshoul/Messaging-App",
    previewLink: "https://messaging-app-project.onrender.com",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Socket.IO",
    ],
    description: {
      text: "projects.messagingApp.description",
      highlight: "projects.messagingApp.highlight",
    },
  },
  {
    isReverse: true,
    image:
      "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728740228/personal_portfolio/instagramClone_m0tbrs.png",
    title: "Instagram Clone",
    repoLink: "https://github.com/hamza-eshoul/Instagram-Clone",
    previewLink: "https://skynter-instagram-clone.onrender.com/",
    technologies: ["React", "Tailwind CSS", "Firestore", "Firebase Storage"],
    description: {
      text: "projects.instagramClone.description",
      highlight: "projects.instagramClone.highlight",
    },
  },
  {
    isReverse: false,
    image:
      "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728740228/personal_portfolio/odinBlog_kd6esl.png",
    title: "Odin Blog",
    repoLink: "https://github.com/hamza-eshoul/Blog-API",
    previewLink: "https://odin-blog-project.onrender.com/",
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    description: {
      text: "projects.odinBlog.description",
      highlight: "projects.odinBlog.highlight",
    },
  },
  {
    isReverse: true,
    image:
      "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728740227/personal_portfolio/shoppingCart_m9nfqg.png",
    title: "Shopping Cart",
    repoLink: "https://github.com/hamza-eshoul/Shopping-Cart-Project-Vite",
    previewLink: "https://thunder-computation.onrender.com/",
    technologies: ["React", "Tailwind CSS"],
    description: {
      text: "projects.shoppingCart.description",
      highlight: "projects.shoppingCart.highlight",
    },
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="pt-[60px] xsm:pt-[80px] xmd:pt-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        <div className="flex items-center gap-5 pb-4">
          <h2>
            <span className="numberOfHeading">03. </span>{" "}
            <span className="fade-in-animation numbered-headings">
              {t("projects.title")}
            </span>
          </h2>
          <div className="numbered-headings-bar" />
        </div>

        <div className="fade-in-animation flex flex-col items-center gap-2 pb-10 xsm:flex-row">
          <div>
            <RiFolderInfoLine className="text-[50px] text-secondaryColor" />
          </div>

          <p className="rounded-md bg-lightPrimaryColor p-4 text-[18.5px] font-medium text-lightestTertiaryColor">
            {t("projects.info.part1")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight1")}
            </span>
            {t("projects.info.part2")}
            <a
              href="https://render.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryColor underline"
            >
              Render
            </a>{" "}
            {t("projects.info.part3")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight2")}
            </span>{" "}
            {t("projects.info.part4")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight3")}
            </span>
          </p>
        </div>
      </header>

      <section>
        {projects_list.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
