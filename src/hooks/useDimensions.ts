import { useRef, useEffect, RefObject } from "react";

export const useDimensions = (ref: RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
