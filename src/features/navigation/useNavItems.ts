import { useTranslation } from "react-i18next";

export interface NavItem {
  number: string;
  title: string;
  sectionId: string;
}

const NAV_SECTIONS = [
  { number: "01.", translationKey: "navbar.about", sectionId: "aboutMe" },
  { number: "02.", translationKey: "navbar.skills", sectionId: "skills" },
  { number: "03.", translationKey: "navbar.projects", sectionId: "projects" },
  { number: "04.", translationKey: "navbar.contact", sectionId: "contact" },
] as const;

export const useNavItems = () => {
  const { t } = useTranslation();

  const navItems: NavItem[] = NAV_SECTIONS.map(
    ({ number, translationKey, sectionId }) => ({
      number,
      title: t(translationKey),
      sectionId,
    }),
  );

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return { navItems, scrollToSection };
};
