import React from "react";
import MemoComp from "./memo.component";

class ParComp extends React.Component {
  state = {
    name: "Florin",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Florin",
      });
    }, 3000);
  }
  render() {
    console.log("parent component");
    return <MemoComp name={this.state.name} />;
  }
}
export default ParComp;
