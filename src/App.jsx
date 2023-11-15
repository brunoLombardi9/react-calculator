import React, { useState } from "react";
import CalcHeader from "./components/CalcHeader";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";
import { useTheme } from "./ThemeContext";

const App = () => {
  const [result, setResult] = useState(0);
  const [currentCalc, setCurrentCalc] = useState("0");
  const { theme } = useTheme();

  function handleButton(button) {
    console.log(button);
  }

  return (
    <div
      className={`${theme.mainBg} ${theme.headerNSpecialBtns} min-h-screen min-w-screen flex justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[400px]">
        <CalcHeader />
        <Screen result={result} currentCalc={currentCalc} />
        <ButtonsPad handleButton={handleButton} />
      </div>
    </div>
  );
};

export default App;
