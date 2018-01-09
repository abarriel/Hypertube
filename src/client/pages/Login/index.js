import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    status: 'ok',
  }

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <div>
        Login
      </div>
    );
  }
}

export default Login;
