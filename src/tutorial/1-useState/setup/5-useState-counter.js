import React, { useState } from "react";

let a = 0;
const UseStateCounter = () => {
  const [count, setCount] = useState(a);
  const counter = () => {
    setCount(a++);
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          counter();
        }}
      >
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
