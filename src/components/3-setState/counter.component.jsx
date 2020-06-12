import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  //   handleIncrement = () => {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log("callback from setState", this.state.count);
  //       }
  //     );
  //     console.log(this.state.count);
  //   };
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  incrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };
  //   handleDecrement = () => {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   };
  render() {
    return (
      <div>
        <span>Count - {this.state.count}</span>
        <br />
        <button onClick={this.incrementFive}>Increment</button>
        {/* <button onClick={this.handleDecrement}>Decrement</button> */}
      </div>
    );
  }
}
export default Counter;
