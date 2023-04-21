import React, { Component } from "react";
import UserContext from ".";

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      account: null,
      canConnectWithAccessCode: false,
      isAuthentified: false,
    };
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          setUser: (user) => {
            this.setState({
              user,
            });
          },
          account: this.state.account,
          setAccount: (account) => {
            this.setState({
              account,
            });
          },

          canConnectWithAccessCode: this.state.canConnectWithAccessCode,
          setCanConnectWithAccessCode: (canConnectWithAccessCode) => {
            this.setState({
              canConnectWithAccessCode,
            });
          },

          isAuthentified: this.state.isAuthentified,
          setIsAuthentified: (isAuthentified) => {
            this.setState({
              isAuthentified,
            });
          },
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
