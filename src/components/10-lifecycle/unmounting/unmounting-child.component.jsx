import React from "react";

class UnMountingChild extends React.Component {
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
  shouldComponentUpdate() {
    console.log("lifeCycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifeCycle B componentDidUpdate");
  }
  render() {
    console.log("lifeCycle B render ");
    return <div>LifeCicle B</div>;
  }
}
export default UnMountingChild;
