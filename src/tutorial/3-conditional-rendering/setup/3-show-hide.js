import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const showSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", showSize);
    return () => {
      window.removeEventListener("resize", showSize);
    };
  }, []);
  return (
    <div className="nese" style={{ marginTop: `2rem` }}>
      <h1>show/hide</h1>
      <h2>Size: {size}</h2>
    </div>
  );
};

export default ShowHide;
