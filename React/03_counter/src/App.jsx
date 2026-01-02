import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleCountIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleCountDecrease = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const handleCountReset = () => {
    setCount(0);
  };

  const handleSetInput = (e) => {
    setInputValue(e);
  };

  const handleSetCountFromInput = () => {
    setCount(Number(inputValue));
    setInputValue(0);
  };

  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div>
      <div>
        <button onClick={handleCountIncrease} style={{ margin: "0 5px" }}>
          Increase
        </button>
        <button onClick={handleCountDecrease} style={{ margin: "0 5px" }}>
          Decrease
        </button>
        <button onClick={handleCountReset} style={{ margin: "0 5px" }}>
          Reset
        </button>

        <div style={{ margin: "10px 0" }}>
          <input
            style={{
              width: "100px",
              border: "1px solid white",
              margin: "0 5px",
              padding: "0.6em 1.2em",
              borderRadius: "8px",
            }}
            value={inputValue}
            type="number"
            onChange={(e) => handleSetInput(e.target.value)}
          />
          <button style={{ margin: "0 5px" }} onClick={handleSetCountFromInput}>
            Set to {inputValue}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
