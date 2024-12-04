import React, { Component } from 'react';

class UserSignIn extends Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSignIn = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    alert(`Username: ${username}, Password: ${password}`);
  };

  render() {
    return (
      <div>
        <h2>User Sign-In</h2>
        <form>
          <input type="text" placeholder="Username" ref={this.usernameRef} />
          <input type="password" placeholder="Password" ref={this.passwordRef} />
          <button type="button" onClick={this.handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default UserSignIn;
