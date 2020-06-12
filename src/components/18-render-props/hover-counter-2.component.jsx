import React from "react";

class HoverCounter2 extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hover {count} times</h2>;
  }
}
export default HoverCounter2;
