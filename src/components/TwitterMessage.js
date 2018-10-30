import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    let newMessage = this.state.message;
    newMessage = event.target.value;
    this.setState({ message: newMessage }, () =>
      console.log(this.state.message)
    );
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <strong>
          Characters left: {this.props.maxChars - this.state.message.length}
        </strong>
      </div>
    );
  }
}

export default TwitterMessage;
