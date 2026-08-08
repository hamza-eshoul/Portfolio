import { useEffect, useState } from "react";

type MountState = "unmounted" | "mounting" | "mounted" | "unmounting";

export const useDelayMobileNavUnmounting = (): [
  MountState,
  () => void,
  () => void,
] => {
  const [mobileMenuMount, setMobileMenuMount] =
    useState<MountState>("unmounted");

  const show = () => {
    if (mobileMenuMount === "unmounting") {
      return;
    }

    setMobileMenuMount("mounting");
  };

  const hide = () => {
    if (mobileMenuMount === "mounting") {
      return;
    }
    setMobileMenuMount("unmounting");
  };

  useEffect(() => {
    let timeoutId: number | undefined;

    if (mobileMenuMount === "unmounting") {
      timeoutId = window.setTimeout(() => {
        setMobileMenuMount("unmounted");
      }, 390);
    } else if (mobileMenuMount === "mounting") {
      timeoutId = window.setTimeout(() => {
        setMobileMenuMount("mounted");
      }, 390);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [mobileMenuMount]);

  return [mobileMenuMount, show, hide];
};
