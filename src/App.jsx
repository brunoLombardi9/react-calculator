import React, { useState } from "react";
import CalcHeader from "./components/CalcHeader";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";
import { useTheme } from "./ThemeContext";

const App = () => {
  const [operation, setOperation] = useState(null);
  const [topNumber, setTopNumber] = useState("0");
  const [bottomNumber, setBottomNumber] = useState("");
  const { theme } = useTheme();

  function writeNumber(button) {
    const number = button.toString();

    if (!operation) {
      topNumber === "0"
        ? setTopNumber(number)
        : setTopNumber(topNumber + number);
      return;
    }

    if (operation) {
      bottomNumber === "0"
        ? setBottomNumber(number)
        : setBottomNumber(bottomNumber + number);
      return;
    }
  }

  function handleDecimal() {
    if (!operation) {
      if (topNumber.includes(".")) {
        return;
      }
      setTopNumber(topNumber + ".");
      return;
    }

    if (operation) {
      if (bottomNumber.includes(".")) {
        return;
      }
      setBottomNumber(bottomNumber + ".");
    }
  }

  function selectOperation(button) {
    setOperation(button);
  }

  function deleteNumber() {
    if (operation) {
      if (bottomNumber.length === 1) {
        setBottomNumber("0");
        return;
      }
      setBottomNumber(bottomNumber.slice(0, -1));
      return;
    }

    if (!operation) {
      if (topNumber.length === 1) {
        setTopNumber("0");
        return;
      }
      setTopNumber(topNumber.slice(0, -1));
    }
  }

  function reset() {
    setOperation("");
    setBottomNumber("");
    setTopNumber("0");
  }

  function calculate() {
    if (!bottomNumber) {
      return;
    }

    const number1 = Number(topNumber);
    const number2 = Number(bottomNumber);
    let mathOperation = "";

    switch (operation) {
      case "+":
        mathOperation = number1 + number2;
        break;
      case "-":
        mathOperation = number1 - number2;
        break;
      case "x":
        mathOperation = number1 * number2;
        break;
      case "/":
        mathOperation = number1 / number2;
        break;
    }

    setTopNumber(mathOperation.toString());
    setBottomNumber("");
    setOperation("");
  }

  function handleButton(button) {
    if (typeof button === "number") {
      writeNumber(button);
      return;
    }

    if (button === ".") {
      handleDecimal(button);
      return;
    }

    if (button === "+" || button === "-" || button === "x" || button === "/") {
      if (operation) {
        calculate();
        selectOperation(button);
        return;
      }
      selectOperation(button);
      return;
    }

    if (button === "RESET") {
      reset();
      return;
    }

    if (button === "DEL") {
      deleteNumber();
      return;
    }

    if (button === "=") {
      calculate();
      return;
    }
  }

  return (
    <div
      className={`${theme.mainBg} ${theme.headerNSpecialBtns} min-h-screen min-w-screen flex justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[400px]">
        <CalcHeader />
        <Screen
          topNumber={topNumber}
          bottomNumber={bottomNumber}
          operation={operation}
          // calculate={calculate}
        />
        <ButtonsPad handleButton={handleButton} />
      </div>
    </div>
  );
};

export default App;
