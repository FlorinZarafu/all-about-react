import React from "react";
import Comp from "./component.component";
import PureComp from "./pure-component";

class ParentComponent1 extends React.Component {
  state = {
    name: "Florin",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Florin",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component");
    return (
      <div>
        <PureComp name={this.state.name} />
        <Comp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComponent1;
