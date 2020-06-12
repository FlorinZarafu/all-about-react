import React from "react";
import Props from "./props.component";
import PropsChildren from "./props-children.component";
import StatePropsComp from "./stateful-props.component";

const PropsContainer = () => {
  return (
    <div>
      <div className="props">
        <Props title="Title 1" subtitle="subtitle 1" />
        <Props title="Title 2" subtitle="subtitle 2" />
        <Props title="Title 3" subtitle="subtitle 3" />
      </div>
      <div className="props-children">
        <PropsChildren name="Florin" />
        <PropsChildren name="Andrei">fuck offf</PropsChildren>
      </div>
      <div className="state-props-comp">
        <StatePropsComp job="developer" />
        <StatePropsComp job="designer" />
        <StatePropsComp job="nothing" />
      </div>
    </div>
  );
};
export default PropsContainer;
