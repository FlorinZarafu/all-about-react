import React from "react";

const MemoComp = ({ name }) => {
  console.log("child component");
  return <div>{name}</div>;
};
export default React.memo(MemoComp);
