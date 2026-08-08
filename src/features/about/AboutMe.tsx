import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const aboutMeImageUrl =
  "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728738550/personal_portfolio/react_nestjs_hqe4kg.png";

const AboutMe = () => {
  const { t } = useTranslation();

  // library hooks
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="aboutMe"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto max-w-4xl py-[60px] xsm:py-[80px] xmd:py-[100px]`}
    >
      <header className="fade-in-animation flex items-center gap-6 pb-10">
        <h2>
          {" "}
          <span className="numberOfHeading">01. </span>{" "}
          <span className="numbered-headings">{t("aboutMe.title")}</span>
        </h2>
        <div className="numbered-headings-bar" />
      </header>

      <div className="flex flex-col items-center gap-14 font-medium xmd:flex-row xmd:items-start">
        <section className="fade-in-animation text-justify text-[20px] font-normal leading-7 xmd:basis-3/5">
          <p>
            {t("aboutMe.paragraph1.part1")}{" "}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              className="font-medium text-secondaryColor underline"
            >
              {" "}
              {t("aboutMe.paragraph1.odinProject")}
            </a>
            {t("aboutMe.paragraph1.part2")}
          </p>

          <p className="pt-4">
            {t("aboutMe.paragraph2.part1")}
            <span className="font-medium text-secondaryColor">
              {" "}
              {t("aboutMe.paragraph2.emphasis")}
            </span>
          </p>

          <p className="pt-4">
            {t("aboutMe.paragraph3.part1")}{" "}
            <span className="font-medium text-secondaryColor">
              {t("aboutMe.paragraph3.react")}
            </span>{" "}
            {t("aboutMe.paragraph3.part2")}{" "}
            <span className="font-medium text-secondaryColor">
              {t("aboutMe.paragraph3.frontend")}
            </span>{" "}
            {t("aboutMe.paragraph3.part3")}
            <span className="font-medium text-secondaryColor">
              {" "}
              {t("aboutMe.paragraph3.nestjs")}{" "}
            </span>
            {t("aboutMe.paragraph3.part4")}
            <span className="font-medium text-secondaryColor">
              {" "}
              {t("aboutMe.paragraph3.postgresql")}{" "}
            </span>
            {t("aboutMe.paragraph3.part5")}
            <span className="font-medium text-secondaryColor">
              {" "}
              {t("aboutMe.paragraph3.restfulApis")}{" "}
            </span>
            {t("aboutMe.paragraph3.part6")}
            <span className="font-medium text-secondaryColor">
              {" "}
              {t("aboutMe.paragraph3.backend")}{" "}
            </span>
            {t("aboutMe.paragraph3.part7")}
          </p>
        </section>

        <div className="group relative max-w-[300px] cursor-pointer transition duration-300 ease-in-out xmd:basis-2/5">
          <div className="relative z-[1] block aspect-square w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-inherit group-hover:before:hidden">
            <div className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale transition duration-0 group-hover:brightness-100 group-hover:grayscale-0">
              <div className="block">
                <img
                  className="static bottom-0 left-0 right-0 top-0 block aspect-square w-full rounded-md"
                  src={aboutMeImageUrl}
                  alt={t("aboutMe.imageAlt")}
                />
              </div>
              <img
                src={aboutMeImageUrl}
                className="absolute bottom-0 left-0 right-0 top-0 aspect-square w-full rounded-md"
                alt={t("aboutMe.imageAlt")}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 aspect-square translate-x-4 translate-y-4 rounded border-[2px] border-secondaryColor transition duration-300 ease-in-out group-hover:translate-x-5 group-hover:translate-y-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
