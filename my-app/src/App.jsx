import React, { useState } from "react";

function App() {
  // State variable
  const [count, setCount] = useState(0);

  // Function to increase count by 5
  const addFive = () => {
    // React internally does something similar to:
    // setCount = (newValue) => {
    //   state = newValue;
    //   render();
    // }

    setCount(count + 5);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>React useState Example</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={addFive}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Add +5
      </button>

      <hr />

      <h3>How React works internally (Concept)</h3>

      <pre
        style={{
          background: "#f4f4f4",
          padding: "15px",
          display: "inline-block",
          textAlign: "left",
        }}
      >
      </pre>
    </div>
  );
}

export default App;
