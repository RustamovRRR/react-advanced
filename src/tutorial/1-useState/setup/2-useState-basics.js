import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("Peter Parker");
  const handleTitle = () => {
    if (text === "Peter Parker"){

      setText("Hello Peter");
    } else{
      
      setText("Peter Parker");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleTitle}>
        click me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
