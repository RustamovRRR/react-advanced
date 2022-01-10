import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "Walter Bishop"}</h1>
      {text && <h2>Olivia Dunham</h2>}
      {!text && <h2>Peter Bishop</h2>}
    </>
  );
};

export default ShortCircuit;
