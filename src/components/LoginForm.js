import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserNameChange = event => {
    let newUserName = this.state.username;
    newUserName = event.target.value;
    this.setState({ username: newUserName }, () =>
      console.log(this.state.username)
    );
  };

  handlePasswordChange = event => {
    let newPassword = this.state.password;
    newPassword = event.target.value;
    this.setState({ password: newPassword });
  };

  onSubmit = event => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    if (username.length > 0 && password.length > 0) {
      this.props.onSubmit({ username: username, password: password });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
