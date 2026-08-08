import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

const SCROLL_THRESHOLD = 50;

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const previousScrollY = useRef(0);

  useEffect(() => {
    const controlDirection = () => {
      if (window.scrollY < SCROLL_THRESHOLD) return;

      setScrollDirection(
        window.scrollY > previousScrollY.current ? "down" : "up",
      );
      previousScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", controlDirection);

    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return scrollDirection;
};
