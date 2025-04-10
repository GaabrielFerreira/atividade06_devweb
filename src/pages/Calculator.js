import React, { useState } from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
import '../App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  // ... (mantenha toda a lógica da calculadora como estava anteriormente)

  return (
    <div className="calculator-container">
      <h2>Calculadora</h2>
      <CalculatorDisplay value={display} />
      <div className="calculator-buttons">
        <button className="calc-btn clear" onClick={clearDisplay}>C</button>
        <button className="calc-btn operator" onClick={() => performOperation('/')}>÷</button>
        <button className="calc-btn operator" onClick={() => performOperation('*')}>×</button>
        <button className="calc-btn" onClick={() => inputDigit(7)}>7</button>

        <button className="calc-btn" onClick={() => inputDigit(8)}>8</button>
        <button className="calc-btn" onClick={() => inputDigit(9)}>9</button>
        <button className="calc-btn operator" onClick={() => performOperation('-')}>-</button>
        <button className="calc-btn" onClick={() => inputDigit(4)}>4</button>

        <button className="calc-btn" onClick={() => inputDigit(5)}>5</button>
        <button className="calc-btn" onClick={() => inputDigit(6)}>6</button>
        <button className="calc-btn operator" onClick={() => performOperation('+')}>+</button>
        <button className="calc-btn" onClick={() => inputDigit(1)}>1</button>

        <button className="calc-btn" onClick={() => inputDigit(2)}>2</button>
        <button className="calc-btn" onClick={() => inputDigit(3)}>3</button>
        <button className="calc-btn equals" onClick={handleEquals}>=</button>

        <button className="calc-btn zero" onClick={() => inputDigit(0)}>0</button>
        <button className="calc-btn" onClick={inputDecimal}>.</button>
      </div>
    </div>
  );
};

export default Calculator;