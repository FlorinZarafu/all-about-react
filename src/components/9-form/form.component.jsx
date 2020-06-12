import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    pas: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.value]: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Pas</label>
          <input
            type="text"
            name={this.state.pas}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            name={this.state.comments}
            onChange={this.handleChange}
          ></textarea>
        </div>
      </form>
    );
  }
}
export default Form;
