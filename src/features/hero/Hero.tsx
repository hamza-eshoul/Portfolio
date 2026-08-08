import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Hero = () => {
  // library hooks
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });

  // data
  const contactRef = document.querySelector("#contact");

  // functions
  const scrollToContactSection = () => {
    contactRef?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      id="hero"
    >
      <div className="fade-in-animation flex h-screen min-h-screen flex-col justify-center pl-2.5">
        <p className="font-mono text-secondaryColor">{t("hero.greeting")}</p>
        <h2 className="-translate-x-1 pt-5 font-semibold text-lightestTertiaryColor [font-size:_clamp(40px,8vw,80px)]">
          Hamza Eshoul.
        </h2>
        <h2 className="-translate-x-1 font-semibold leading-[0.9] [font-size:_clamp(40px,8vw,70px)]">
          {t("hero.tagline")}
        </h2>

        <p className="max-w-[540px] -translate-x-1 py-5 text-[18px] font-normal xsm:text-[20px]">
          {t("hero.description.part1")}{" "}
          <span className="font-medium text-secondaryColor">
            {t("hero.description.webDeveloper")}
          </span>{" "}
          {t("hero.description.part2")}
          <span className="font-medium text-secondaryColor">
            {" "}
            {t("hero.description.technologies")}
          </span>
        </p>

        <div
          className="group relative mt-6 h-[48px] w-[170px] -translate-x-1"
          onClick={scrollToContactSection}
        >
          <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            {t("hero.contactButton")}
          </button>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
