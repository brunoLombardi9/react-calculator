import React, { useState } from "react";
import CalcHeader from "./components/CalcHeader";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";
import { useTheme } from "./ThemeContext";

const App = () => {
  const [operation, setOperation] = useState(null);
  const [currentCalc, setCurrentCalc] = useState("");
  const [result, setResult] = useState("0");
  const { theme } = useTheme();

  function writeNumber(button) {
    const number = button.toString();
    if (!operation) {
      if (result === "0") {
        button === 0 ? null : setResult(number);
        return;
      }
      const newNumber = result + number;
      setResult(newNumber.toString());
    }

    if (operation) {
      if (currentCalc === "0") {
        button === 0 ? null : setCurrentCalc(number);
        return;
      }
      const newNumber = currentCalc + number;
      setCurrentCalc(newNumber.toString());
    }
  }

  function handleDecimal() {
    if (!operation) {
      if (result.includes(".")) {
        return;
      }
      setResult(result + ".");
    }

    if (operation) {
      if (currentCalc.includes(".")) {
        return;
      }
      setCurrentCalc(currentCalc + ".");
    }
  }

  function selectOperation(button) {
    setOperation(button);
  }

  function deleteNumber() {
    if (operation) {
      if (currentCalc.length === 1) {
        setCurrentCalc("0");
        return;
      }
      setCurrentCalc(currentCalc.slice(0, -1));
    }

    if (!operation) {
      if (result.length === 1) {
        setResult("0");
        return;
      }
      setResult(result.slice(0, -1));
    }
  }

  function reset() {
    setOperation("");
    setCurrentCalc("");
    setResult("0");
  }

  function calculate() {
    if (!currentCalc) {
      return;
    }

    let mathOperation = "";
    if (operation === "+") {
      mathOperation = Number(result) + Number(currentCalc);
    }
    if (operation === "-") {
      mathOperation = Number(result) - Number(currentCalc);
    }
    if (operation === "x") {
      mathOperation = Number(result) * Number(currentCalc);
    }
    if (operation === "/") {
      mathOperation = Number(result) / Number(currentCalc);
    }
    setResult(mathOperation.toString());
    setCurrentCalc("");
    setOperation("");
  }

  function handleButton(button) {
    if (typeof button === "number") {
      writeNumber(button);
    }

    if (button === ".") {
      handleDecimal(button);
    }

    if (button === "+" || button === "-" || button === "x" || button === "/") {
      if (operation) {
        calculate();
        selectOperation(button);
        return;
      }
      selectOperation(button);
    }

    if (button === "RESET") {
      reset();
    }

    if (button === "DEL") {
      deleteNumber();
    }

    if (button === "=") {
      calculate();
    }
  }

  return (
    <div
      className={`${theme.mainBg} ${theme.headerNSpecialBtns} min-h-screen min-w-screen flex justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[400px]">
        <CalcHeader />
        <Screen
          result={result}
          currentCalc={currentCalc}
          operation={operation}
        />
        <ButtonsPad handleButton={handleButton} />
      </div>
    </div>
  );
};

export default App;
