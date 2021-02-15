import { useEffect } from "react";

export const useBoop = (
  ref: React.RefObject<HTMLElement>,
  className: string
) => {
  const addClass = () => ref?.current?.classList.add(className);
  const removeClass = () => ref?.current?.classList.remove(className);
  const onMouseEnter = () => addClass();
  const onAnimationEnd = () => removeClass();
  useEffect(() => {
    ref?.current?.addEventListener("mouseenter", onMouseEnter);
    ref?.current?.addEventListener("animationend", onAnimationEnd);
    return () => {
      ref?.current?.removeEventListener("mouseenter", onMouseEnter);
      ref?.current?.removeEventListener("animationend", onAnimationEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};
