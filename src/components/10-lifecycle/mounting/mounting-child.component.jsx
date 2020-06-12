import React from "react";

class MountingChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Florin",
    };
    console.log("lifeCycle B contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifeCycle B componentDidMount");
  }

  render() {
    console.log("lifeCycle B render ");
    return <div>LifeCicle B</div>;
  }
}
export default MountingChild;
