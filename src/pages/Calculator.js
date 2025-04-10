import React, { useState } from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
import '../App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) return;
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);
    
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }
    
    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (first, second, op) => {
    switch(op) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return first / second;
      default: return second;
    }
  };

  const handleEquals = () => {
    if (operator === null || firstOperand === null) return;
    
    const inputValue = parseFloat(display);
    const result = calculate(firstOperand, inputValue, operator);
    
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  return (
    <div className="calculator-container">
      <h2>Calculadora</h2>
      <CalculatorDisplay value={display} />
      
      {/* AQUI VAI O CÓDIGO DOS BOTÕES */}
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