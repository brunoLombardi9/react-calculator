import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

const Screen = ({ topNumber, bottomNumber, operation }) => {
  const { theme } = useTheme();
  const topNumberRef = useRef(null);
  const bottomNumberRef = useRef(null);

  function scrollToRight(ref) {
    if (ref.current) {
      ref.current.scrollLeft = ref.current.scrollWidth;
    }
  }

  function scrollToLeft(ref) {
    if (ref.current) {
      ref.current.scrollLeft = 0;
    }
  }

  useEffect(() => {
    scrollToRight(topNumberRef);
  }, [topNumber]);

  useEffect(() => {
    scrollToRight(bottomNumberRef);
    if (topNumberRef.current.scrollLeft !== 0) {
      scrollToLeft(topNumberRef);
    }
  }, [bottomNumber]);


  return (
    <div
      className={`w-full h-[90px] grid grid-cols-1 grid-flow-col gap-2 justify-center items-end mb-3 rounded p-4  ${theme.screenBg} ${theme.topText}`}
    >
      <div className="col-span-1 order-2 h-full flex flex-col justify-center items-center">
        <p
          className={`text-center text-2xl ${
            !bottomNumber ? "text-4xl" : "text-2xl"
          }`}
        >
          {operation}
        </p>
      </div>

      <div className="w-full col-span-9 order-1">
        <p
          ref={topNumberRef}
          className={`${
            !bottomNumber ? "text-4xl" : "text-2xl"
          } text-end overflow-x-scroll scrollbar-hide w-full`}
        >
          {topNumber}
        </p>

        <p
          ref={bottomNumberRef}
          className={`text-2xl text-end overflow-x-scroll scrollbar-hide w-full`}
        >
          {bottomNumber}
        </p>
      </div>
    </div>
  );
};
export default Screen;
