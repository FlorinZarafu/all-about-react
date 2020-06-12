import React from "react";
import UnMountingChild from "./unmounting-child.component";

class UnMounting extends React.Component {
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

  shouldComponentUpdate() {
    console.log("lifeCycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifeCycle A componentDidUpdate");
  }

  handleClick = () => {
    this.setState({
      name: "Andrei",
    });
  };

  render() {
    console.log("lifeCycle A render ");
    return (
      <div>
        <button onClick={this.handleClick}>Change State</button>
        <UnMountingChild />
      </div>
    );
  }
}
export default UnMounting;
