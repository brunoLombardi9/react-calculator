import React from "react";
import { useTheme } from "../ThemeContext";

const CalcHeader = () => {
  const { theme, changeTheme, options, selectedOption } = useTheme();

  return (
    <div
      className={`mb-5 w-full flex justify-between items-center gap-5 ${theme.topText}`}
    >
      <div>
        <p className="text-2xl">calc</p>
      </div>

      <div className="flex justify-center items-center gap-5">
        <p className="h-full mt-auto text-xs">THEME</p>
        <div className="flex flex-col">
          <div className="flex justify-evenly gap-2">
            {options.map((opt) => (
              <p key={opt} className="text-center">
                {opt}
              </p>
            ))}
          </div>
          <div className={`${theme.keyPadBg} flex gap-2 rounded-full p-1`}>
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => changeTheme(opt)}
                className="text-xs"
              >
                <div
                  className={`${
                    selectedOption === opt &&
                    `${theme.equalToggleBtnColor} ${theme.equalToggleBtnHover}`
                  }
                  } rounded-full w-3 h-3`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcHeader;
