import React from "react";

class UserGreeting3 extends React.Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    let message = this.state.isLoggedIn ? <div>Florin</div> : <div>Guest</div>;
    return <div>{message}</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Flroin</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
  }
}
export default UserGreeting3;
