import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Contact = () => {
  // library hooks
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="contact"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto flex max-w-2xl flex-col items-center justify-center py-[60px] xsm:py-[80px] xmd:py-[100px]`}
    >
      <header className="flex items-center gap-6">
        <h2 className="py-5">
          <span className="pr-3 font-mono text-[14px] text-secondaryColor">
            04.{" "}
          </span>
          <span className="fade-in-animation font-mono text-[16px] text-secondaryColor">
            {t("contact.nextStep")}
          </span>
        </h2>
      </header>

      <h3 className="fade-in-animation pb-2.5 font-semibold text-lightestTertiaryColor [font-size:_clamp(40px,5vw,60px)]">
        {t("contact.title")}
      </h3>

      <p className="fade-in-animation max-w-[550px] pb-2 text-center text-[18px] xsm:text-[20px]">
        {t("contact.description")}
      </p>

      <a
        href="mailto:hamza.eshoul.pro@gmail.com"
        className="fade-in-animation group relative mt-12 h-[48px] w-[170px] -translate-x-1"
      >
        <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          {t("contact.buttonText")}
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </a>
    </section>
  );
};

export default Contact;
