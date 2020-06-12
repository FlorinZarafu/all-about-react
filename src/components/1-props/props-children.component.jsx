import React from "react";

const PropsChildren = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );
};
export default PropsChildren;
