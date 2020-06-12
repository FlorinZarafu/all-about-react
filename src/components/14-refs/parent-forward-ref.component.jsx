import React from "react";
import ForwardingRefs from "./fowrdin-refs.component";

class ForwardRefParent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardingRefs ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Ref</button>
      </div>
    );
  }
}
export default ForwardRefParent;
