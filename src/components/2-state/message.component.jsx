import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome visitor",
    };
  }
  handleClick = () => {
    this.setState({
      message: "Welcome user",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    );
  }
}
export default Message;
