import React, { useState } from "react";

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Step 4: Display count */}
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>

      {/* Step 3: Buttons */}
      <button style={{ margin: "5px" }} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button style={{ margin: "5px" }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button style={{ margin: "5px" }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
