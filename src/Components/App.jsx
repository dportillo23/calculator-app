import { useState } from "react";
import KeyPad from "./KeyPad";
import Screen from "./Screen"
import TitleBox from "./TitleBox";
import "../Styles/style.css";


function App() {

  // Calculator operations
  const add = (n1, n2) => parseFloat((n1 + n2).toFixed(10)).toString()
  const rest = (n1, n2) => parseFloat((n1 - n2).toFixed(10)).toString()
  const multiply = (n1, n2) => parseFloat((n1 * n2).toFixed(10)).toString()
  const division = (n1, n2) => parseFloat((n1 / n2).toFixed(10)).toString()


  // Set display state
  const [display, setDisplay] = useState({
    firstOperand: "",
    operator: "",
    secondOperand: ""
  });


  // Functions to handle clicks on buttons
  // Add numbers
  const handleClick = keyPressed => {
    if (display.operator) {
      setDisplay(prevDisplay => {
        const oldDisplay = display.secondOperand
        return {
          ...prevDisplay,
          secondOperand: oldDisplay + keyPressed
        }
      })
    } else {
      setDisplay(prevDisplay => {
        const oldDisplay = display.firstOperand
        return {
          ...prevDisplay,
          firstOperand: oldDisplay + keyPressed
        }
      })
    }
  }

  // Select the operation
  const handleOperator = keyPressed => {

    if (display.secondOperand) {
      equal()
      setDisplay(prevDisplay => {
        return ({
          ...prevDisplay,
          operator: keyPressed
        })
      })
    } else {
      setDisplay(prevDisplay => {
        return ({
          ...prevDisplay,
          operator: keyPressed
        })
      })
    }

  }

  // Clear the screen
  const clearScreen = () => {
    setDisplay({
      firstOperand: "",
      operator: "",
      secondOperand: ""
    })
  }

  // Solve the equation and show it on screen
  const equal = () => {
    const { firstOperand, operator, secondOperand } = display
    const fOperand = parseFloat(firstOperand);
    const sOperand = parseFloat(secondOperand);
    if (operator === "+") {
      const calculation = add(fOperand, sOperand)
      setDisplay({
        firstOperand: calculation,
        operator: "",
        secondOperand: "",
      })
    } else if (operator === "-") {
      const calculation = rest(fOperand, sOperand)
      setDisplay({
        firstOperand: calculation,
        operator: "",
        secondOperand: "",
      })
    } else if (operator === "*") {
      const calculation = multiply(fOperand, sOperand)
      setDisplay({
        firstOperand: calculation,
        operator: "",
        secondOperand: "",
      })
    } else if (operator === "/") {
      const calculation = division(fOperand, sOperand)
      setDisplay({
        firstOperand: calculation,
        operator: "",
        secondOperand: "",
      })
    }
  }

  // Backspace function
  const backSpace = () => {
    if (display.secondOperand) {
      setDisplay(prevDisplay => {
        return ({
          ...prevDisplay,
          secondOperand: display.secondOperand.slice(0, -1)
        })
      })
    } else if (display.operator) {
      setDisplay(prevDisplay => {
        return ({
          ...prevDisplay,
          operator: display.operator.slice(0, -1)
        })
      })
    } else {
      setDisplay(prevDisplay => {
        return ({
          ...prevDisplay,
          firstOperand: display.firstOperand.slice(0, -1)
        })
      })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <TitleBox />
        <Screen display={display.firstOperand + display.operator + display.secondOperand} />
        <KeyPad
          click={handleClick}
          clear={clearScreen}
          equal={equal}
          deleteBack={backSpace}
          operator={handleOperator}
        />
      </div>
    </header>
  );
}

export default App;
