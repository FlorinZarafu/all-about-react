import React from "react";

class UserGreeting2 extends React.Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Florin</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>;
  }
}
export default UserGreeting2;
