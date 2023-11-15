import React from "react";
import { useTheme } from "../ThemeContext";

const Screen = ({ result, currentCalc }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full h-full flex flex-col items-end mb-3 rounded p-4 ${theme.screenBg} ${theme.topText}`}
    >
      <p>{currentCalc}</p>
      <p>{result}</p>
    </div>
  );
};

export default Screen;
