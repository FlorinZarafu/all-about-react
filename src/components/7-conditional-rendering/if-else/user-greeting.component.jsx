import React from "react";

class UserGreeting extends React.Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    if (!this.state.isLoggedIn) {
      return <div>Welcome Florin</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}
export default UserGreeting;
