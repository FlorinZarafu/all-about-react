import React from "react";

class Click extends React.Component {
  handleClick = () => {
    console.log("button clicked");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default Click;
