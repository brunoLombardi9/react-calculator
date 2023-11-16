import React from "react";
import { numberButtons } from "../constants";
import { useTheme } from "../ThemeContext";

const ButtonsPad = ({ handleButton }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`grid grid-cols-4 gap-3 w-full p-5 rounded ${theme.keyPadBg}`}
    >
      {numberButtons.map((button) => {
        let bgColor = "";
        let fontColor = "";
        let shadowColor = "";
        let hover = "";
        if (button === "RESET" || button === "DEL") {
          bgColor = theme.resetDelBtnColor;
          fontColor = theme.resetDelBtnText;
          shadowColor = theme.resetDelBtnShadow;
          hover = theme.resetDelBtnHover;
        } else if (button === "=") {
          bgColor = theme.equalToggleBtnColor;
          fontColor = theme.equalToggleBtnText;
          shadowColor = theme.equalToggleBtnShadow;
          hover = theme.equalToggleBtnHover;
        } else {
          bgColor = theme.normalBtnColor;
          fontColor = theme.normalBtnText;
          shadowColor = theme.normalBtnShadow;
          hover = theme.normalBtnHover;
        }

        return (
          <div
            key={button}
            className={`${
              button === "RESET" || button === "=" ? "col-span-2" : "col-span-1"
            }`}
          >
            <button
              className={`w-full h-full rounded z-20 relative text-[32px] ${hover} ${bgColor} ${fontColor}`}
              onClick={() => handleButton(button)}
            >
              {button}
            </button>
            <div
              className={`${shadowColor} pb-[7px] z-10 rounded-b relative bottom-[4px]`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonsPad;
