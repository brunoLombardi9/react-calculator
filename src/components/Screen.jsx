import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

const Screen = ({ result, currentCalc, operation }) => {
  const { theme } = useTheme();
  const resultRef = useRef(null);
  const currentCalcRef = useRef(null);

  function scrollToRight() {
    if (resultRef.current) {
      resultRef.current.scrollLeft = resultRef.current.scrollWidth;
    }
    if (currentCalcRef.current) {
      currentCalcRef.current.scrollLeft = currentCalcRef.current.scrollWidth;
    }
  }

  useEffect(() => {
    scrollToRight();
  }, [result, currentCalc, operation]);

  return (
    <div
      className={`w-full h-[90px] grid grid-cols-1 grid-flow-col gap-2 justify-center items-end mb-3 rounded p-4  ${theme.screenBg} ${theme.topText}`}
    >
      <div className="col-span-1 order-2 h-full flex flex-col justify-center items-center">
        <p
          className={`text-center text-2xl ${
            !currentCalc ? "text-4xl" : "text-2xl"
          }`}
        >
          {operation}
        </p>
      </div>

      <div className="w-full col-span-9 order-1">
        <p
          ref={resultRef}
          className={`${
            !currentCalc ? "text-4xl" : "text-2xl"
          } text-end overflow-x-scroll scrollbar-hide w-full`}
        >
          {result}
        </p>

        {result !== "0" && (
          <p
            ref={currentCalcRef}
            className={`${
              !result ? "text-4xl" : "text-2xl"
            } text-end overflow-x-scroll scrollbar-hide w-full`}
          >
            {currentCalc}
          </p>
        )}
      </div>
    </div>
  );
};
export default Screen;
