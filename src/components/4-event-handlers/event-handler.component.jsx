import React from "react";

const EventHandler = () => {
  const clickHandler = () => {
    console.log("button click");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
export default EventHandler;
