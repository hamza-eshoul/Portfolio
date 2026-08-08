import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

// icons
import {
  SiHtml5,
  SiCss3,
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiShadcnui,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiLaravel,
  SiSupabase,
  SiGraphql,
  SiPostgresql,
  SiGithub,
  SiWebpack,
  SiRailway,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BsGit } from "react-icons/bs";

// types
import { SkillCategory, SkillsData } from "@/types";

// components
import SkillsSection from "./SkillsSection";

const Skills = () => {
  const { t } = useTranslation();

  // local state
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    SkillCategory.Frontend,
  );
  const [skillWidth, setSkillWidth] = useState(0);

  // library hooks
  const skillRef = useRef<HTMLLIElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      if (skillRef.current) {
        setSkillWidth(skillRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillsData: SkillsData = {
    [SkillCategory.Frontend]: {
      main: [
        { name: t("skills.frontend.html"), icon: <SiHtml5 /> },
        { name: t("skills.frontend.css"), icon: <SiCss3 /> },
        { name: t("skills.frontend.typescript"), icon: <SiTypescript /> },
        { name: t("skills.frontend.react"), icon: <FaReact /> },
        { name: t("skills.frontend.tailwindCss"), icon: <SiTailwindcss /> },
      ],
      complementary: [
        { name: t("skills.frontend.vueJs"), icon: <FaVuejs /> },
        { name: t("skills.frontend.tanstackQuery"), icon: <SiReactquery /> },
        { name: t("skills.frontend.nextJs"), icon: <SiNextdotjs /> },
        { name: t("skills.frontend.redux"), icon: <SiRedux /> },
        { name: t("skills.frontend.shadcnUi"), icon: <SiShadcnui /> },
      ],
    },
    [SkillCategory.Backend]: {
      main: [
        { name: t("skills.backend.nodeJs"), icon: <FaNodeJs /> },
        { name: t("skills.backend.nestJs"), icon: <SiNestjs /> },
        { name: t("skills.backend.postgresql"), icon: <SiPostgresql /> },
        { name: t("skills.backend.mongodb"), icon: <SiMongodb /> },
        { name: t("skills.backend.supabase"), icon: <SiSupabase /> },
      ],
      complementary: [
        { name: t("skills.backend.expressJs"), icon: <SiExpress /> },
        { name: t("skills.backend.laravel"), icon: <SiLaravel /> },
        { name: t("skills.backend.mysql"), icon: <GrMysql /> },
        { name: t("skills.backend.graphql"), icon: <SiGraphql /> },
        { name: t("skills.backend.firebase"), icon: <SiFirebase /> },
      ],
    },
    [SkillCategory.DevOps]: {
      main: [
        { name: t("skills.devops.git"), icon: <BsGit /> },
        { name: t("skills.devops.github"), icon: <SiGithub /> },
        { name: t("skills.devops.webpack"), icon: <SiWebpack /> },
        { name: t("skills.devops.railways"), icon: <SiRailway /> },
        { name: t("skills.devops.render"), icon: <SiRender /> },
      ],
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto max-w-3xl py-[60px] xsm:py-[80px] xmd:py-[100px]`}
    >
      <header className="flex items-center gap-6 pb-10">
        <h2>
          <span className="numberOfHeading">02. </span>
          <span className="fade-in-animation numbered-headings">
            {t("skills.title")}
          </span>
        </h2>
        <div className="numbered-headings-bar" />
      </header>

      <div className="relative flex flex-col gap-8 xmd:flex-row xmd:gap-0">
        <div
          className={`absolute hidden h-[44.898px] xmd:block ${
            activeCategory === SkillCategory.Backend
              ? "translate-y-[44.898px]"
              : activeCategory === SkillCategory.DevOps
                ? "translate-y-[90px]"
                : ""
          } rounded border-[1px] border-secondaryColor transition duration-300 ease-in-out`}
        />
        <div
          className={`absolute top-[45px] h-[1px] rounded border-[1px] border-secondaryColor transition duration-300 ease-in-out xmd:hidden`}
          style={{
            width: `${skillWidth - 1}px`,
            transform: `translateX(${
              activeCategory === SkillCategory.Backend
                ? skillWidth
                : activeCategory === SkillCategory.DevOps
                  ? skillWidth * 2
                  : 0
            }px)`,
          }}
        />

        <ul className="flex w-full flex-row xmd:w-auto xmd:flex-col">
          {Object.values(SkillCategory).map((category) => (
            <li
              key={category}
              ref={category === SkillCategory.Frontend ? skillRef : null}
              className={`skill-items ${
                activeCategory === category ? "text-secondaryColor" : ""
              } flex-1 text-center xmd:flex-none xmd:text-start`}
              onClick={() => setActiveCategory(category)}
            >
              {t(`skills.categories.${category.toLowerCase()}`)}
            </li>
          ))}
        </ul>

        <SkillsSection category={activeCategory} skillsData={skillsData} />
      </div>
    </section>
  );
};

export default Skills;
