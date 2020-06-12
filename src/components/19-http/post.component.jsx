import React from "react";
import axios from "axios";

class PostForm extends React.Component {
  state = {
    userId: "",
    title: "",
    body: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.handleInput}
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}
export default PostForm;
