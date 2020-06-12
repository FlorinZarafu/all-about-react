import React from "react";
import UpdatedComponent from "../17-higher-order-components/with-counter.component";

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoverder {count} times</h2>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter);
