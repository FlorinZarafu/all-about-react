import React from "react";

const NameList = () => {
  const names = ["Florin", "Andrei", "alexandru", "cristina"];
  const nameList = names.map((name) => {
    return <div>{name}</div>;
  });
  return <div>{nameList}</div>;
};
export default NameList;
