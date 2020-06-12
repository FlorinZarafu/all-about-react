import React from "react";
import UpdatedComponent from "../17-higher-order-components/with-counter.component";

class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
