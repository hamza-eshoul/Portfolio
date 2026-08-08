import { useInView } from "react-intersection-observer";

const LogoOutline = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 84 96"
    className={className}
  >
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          stroke="#64ffda"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        ></polygon>
      </g>
    </g>
  </svg>
);

const Logo = () => {
  // library hooks
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  // functions
  const scrollToHero = () => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      className={`${
        inView ? "fade-in-animation" : "opacity-0"
      } group relative cursor-pointer`}
      onClick={scrollToHero}
    >
      <LogoOutline className="logo-svg transition-translate duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5" />

      <span className="transition-translate absolute left-[15px] top-2.5 z-20 font-mono text-xl font-extrabold text-secondaryColor duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5">
        H{" "}
      </span>

      <LogoOutline className="logo-svg-background transition-translate duration-200 ease-in-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  );
};

export default Logo;
