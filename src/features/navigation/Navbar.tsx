import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDelayMobileNavUnmounting } from "./useDelayMobileNavUnmounting";
import { useNavItems } from "./useNavItems";
import { useScrollDirection } from "./useScrollDirection";

// components
import Logo from "@/components/Logo";
import NavMobileMenu from "./NavMobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  // local state
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [mobileMenuMount, show, hide] = useDelayMobileNavUnmounting();

  // hooks
  const scrollDirection = useScrollDirection();
  const { navItems, scrollToSection } = useNavItems();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  // functions
  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);

    if (mobileMenuMount === "mounted") {
      hide();
      return;
    }

    show();
  };

  const isHidden = scrollDirection === "down";

  return (
    <header>
      <nav
        className={`${
          isHidden
            ? "-translate-y-32 transition duration-700 ease-in-out"
            : "navbar-fade-appear-animation"
        } fixed z-30 flex h-[100px] w-full justify-between bg-navbarBgColor px-[25px] py-[31px] font-mono text-tertiaryColor backdrop-blur xlg:px-[50px]`}
      >
        <Logo />

        <div
          ref={ref}
          className={`${
            inView ? "navbar-fade-appear-animation" : "opacity-0"
          } hidden xmd:block`}
        >
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.sectionId} className="mr-[5px] px-[10px] py-[10px]">
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-[13px] transition-colors duration-300 ease-in-out hover:text-secondaryColor"
                >
                  <span className="text-secondaryColor">{item.number}</span>{" "}
                  {item.title}
                </button>
              </li>
            ))}
            <ResumeButton
              containerClassName="ml-[15px] h-[38px] w-[84px]"
              buttonClassName="bg-primaryColor"
            />
            <LanguageSwitcher className="ml-4" />
          </ul>
        </div>
      </nav>

      <button
        className={`${
          isMenuActive ? "menuActive" : ""
        } fixed right-[25px] top-6 z-40 flex gap-10 py-3.5 xmd:hidden ${
          isHidden
            ? "transtion -translate-y-32 duration-700 ease-in-out"
            : "navbar-fade-appear-animation"
        }`}
        onClick={toggleMobileMenu}
      >
        <div className="relative h-6 w-[30px]">
          <div className="menu-bar1"></div>
          <div className="menu-bar2"></div>
          <div className="menu-bar3"></div>
        </div>
      </button>

      {mobileMenuMount !== "unmounted" && (
        <NavMobileMenu
          mobileMenuMount={mobileMenuMount}
          hide={hide}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      )}
    </header>
  );
};

export default Navbar;
