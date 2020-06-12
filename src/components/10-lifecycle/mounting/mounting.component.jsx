import React from "react";
import MountingChild from "./mounting-child.component";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Florin",
    };
    console.log("lifeCycle A contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifeCycle A componentDidMount");
  }

  render() {
    console.log("lifeCycle A render ");
    return (
      <div>
        LifeCicle A
        <MountingChild />
      </div>
    );
  }
}
export default Mounting;
