import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "walter",
    age: 73,
    message: "random message",
  });

  // using spread operator in object
  const changeMessage = () => {
    setPerson({ ...person, message: "hello Astrid" });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
