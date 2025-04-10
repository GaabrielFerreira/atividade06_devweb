import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [clickHistory, setClickHistory] = useState([]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setClickHistory([...clickHistory.slice(-4), newCount]);
  };

  const reset = () => {
    setCount(0);
    setClickHistory([]);
  };

  return (
    <div className="counter-container">
      <h2>Contador de Cliques</h2>
      <div className="counter-display">{count}</div>
      <button className="counter-button" onClick={increment}>
        Clique Aqui
      </button>
      <button className="counter-reset" onClick={reset}>
        Reiniciar
      </button>
      {clickHistory.length > 0 && (
        <div className="click-history">
          <h3>Últimos cliques:</h3>
          <ul>
            {clickHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClickCounter;