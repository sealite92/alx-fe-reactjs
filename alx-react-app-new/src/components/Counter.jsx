import React from "react";
import { useState } from "react";

export default function Counter() {
  [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
