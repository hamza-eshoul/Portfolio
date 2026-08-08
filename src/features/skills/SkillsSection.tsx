import { useTranslation } from "react-i18next";
import { SkillCategory, SkillsData } from "@/types";
import SkillIcon from "./SkillIcon";

interface SkillsSectionProps {
  category: SkillCategory;
  skillsData: SkillsData;
}

const SkillsSection = ({ category, skillsData }: SkillsSectionProps) => {
  const { t } = useTranslation();
  const skillSet = skillsData[category];

  return (
    <section className="fade-in-animation flex w-full flex-col items-center gap-2">
      <article className="xsm:w-[90%]">
        <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
          {t("skills.mainTechnologies")}
        </h3>
        <div className="my-4 flex flex-wrap justify-center gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor xsm:gap-6 xmd:gap-8 xlg:px-6">
          {skillSet.main.map((skill) => (
            <SkillIcon
              key={skill.name}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          ))}
        </div>
      </article>
      {skillSet.complementary && (
        <article className="xsm:w-[90%]">
          <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            {t("skills.complementaryTechnologies")}
          </h3>
          <div className="my-4 flex flex-wrap justify-center gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor xsm:gap-6 xmd:gap-8 xlg:px-6">
            {skillSet.complementary.map((skill) => (
              <SkillIcon
                key={skill.name}
                skillName={skill.name}
                skillIcon={skill.icon}
              />
            ))}
          </div>
        </article>
      )}
    </section>
  );
};

export default SkillsSection;
