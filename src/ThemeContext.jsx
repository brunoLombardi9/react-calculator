import React, { createContext, useContext, useState } from "react";
import { themes } from "./constants";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.t1);
  const [selectedOption, setSelectedOption] = useState(1);
  const options = [1, 2, 3];

  function changeTheme(option) {
    setTheme(themes["t" + option]);
    setSelectedOption(option);
  }

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme, options, selectedOption }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default ThemeProvider;
