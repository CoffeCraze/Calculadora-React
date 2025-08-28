import { useState } from "react";
import "./Calculadora.css"; // Assuming you have a CSS file for styling

export default function Calculadora() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
  };

  return (
    <div className="calculadora">
      <div className="display">{display}</div>
      <div className="botoes">
        <button onClick={handleClear}>C</button>
        <button onClick={() => setDisplay(display + "0" ? "1" : display + "1")}>
          1
        </button>
        <button onClick={() => setDisplay(display + "0" ? "2" : display + "2")}>
          2
        </button>
        <button onClick={() => setDisplay(display + "0" ? "3" : display + "3")}>
          3
        </button>
        <button onClick={() => setDisplay(display + "0" ? "4" : display + "4")}>
          4
        </button>
        <button onClick={() => setDisplay(display + "0" ? "5" : display + "5")}>
          5
        </button>
        <button onClick={() => setDisplay(display + "0" ? "6" : display + "6")}>
          6
        </button>
        <button onClick={() => setDisplay(display + "0" ? "7" : display + "7")}>
          7
        </button>
        <button onClick={() => setDisplay(display + "0" ? "8" : display + "8")}>
          8
        </button>
        <button onClick={() => setDisplay(display + "0" ? "9" : display + "9")}>
          9
        </button>
        <button onClick={() => setDisplay(display + "0" ? "0" : display + "0")}>
          0
        </button>
      </div>
    </div>
  );
}
