import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    const newInput = input + value;
    setInput(newInput);

    if (value !== '/' || (newInput.includes('/') && /\d+\/\d+$/.test(newInput))) {
      try {
        setResult(eval(newInput).toString());
      } catch (error) {
        setResult('');
      }
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
      setResult('');
    } catch (error) {
      setInput('Error');
      setResult('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{input || "0"}</div>
        <div className="result-preview">{result ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('/')} >/</button>
        <button onClick={() => handleClick('*')} >x</button>
        <button onClick={() => handleClick('-')} >-</button>
        <button onClick={() => handleClick('+')} >+</button>
        <button onClick={handleCalculate} className="equal">=</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleClick(number.toString())}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
