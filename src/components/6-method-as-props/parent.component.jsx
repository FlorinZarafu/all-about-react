import React from "react";
import ChildComponent from "./child.component";

class ParentComponent extends React.Component {
  state = {
    parentName: "Parent",
  };
  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
export default ParentComponent;
