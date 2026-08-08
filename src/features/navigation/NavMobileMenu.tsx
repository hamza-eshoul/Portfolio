import { useEffect } from "react";
import { useNavItems } from "./useNavItems";

// components
import Overlay from "@/components/Overlay";
import LanguageSwitcher from "./LanguageSwitcher";
import ResumeButton from "./ResumeButton";

interface NavMobileMenuProps {
  mobileMenuMount: string;
  hide: () => void;
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
}

const NavMobileMenu = ({
  mobileMenuMount,
  hide,
  isMenuActive,
  setIsMenuActive,
}: NavMobileMenuProps) => {
  const { navItems, scrollToSection } = useNavItems();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  // functions
  const hideNavAndTriggerMenuAnimation = () => {
    hide();
    setIsMenuActive(!isMenuActive);
  };

  const scrollToSectionFromMobileNav = (sectionId: string) => {
    scrollToSection(sectionId);
    hideNavAndTriggerMenuAnimation();
  };

  return (
    <>
      <Overlay
        hideNavAndTriggerMenuAnimation={hideNavAndTriggerMenuAnimation}
      />
      <section
        className={`mobileMenu-slidein-animation ${
          mobileMenuMount === "unmounting"
            ? "mobileMenu-slideout-animation"
            : ""
        } fixed right-0 top-0 z-30 flex min-h-screen w-[70%] max-w-[400px] items-center justify-center bg-lightPrimaryColor font-mono text-tertiaryColor xmd:hidden`}
      >
        <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
          {navItems.map((item) => (
            <li
              key={item.sectionId}
              className="nav-links flex flex-col items-center justify-center gap-2"
              onClick={() => scrollToSectionFromMobileNav(item.sectionId)}
            >
              <span className="text-[14px] text-secondaryColor">
                {item.number}
              </span>
              <span className="[font-size:_clamp(14px,4vw,18px)]">
                {item.title}
              </span>
            </li>
          ))}
          <ResumeButton
            containerClassName="h-[46px] w-[180px]"
            buttonClassName="bg-lightPrimaryColor"
          />
          <LanguageSwitcher labelClassName="[font-size:_clamp(14px,4vw,16px)]" />
        </ul>
      </section>
    </>
  );
};

export default NavMobileMenu;
