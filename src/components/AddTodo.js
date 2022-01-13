import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if (this.state.input !== "") {
      this.props.addTodo(this.state.input);
      this.setState({ input: "" });
    }
  };

  onChangeBox = input => {
    this.setState(({ input }) => ({
      input: input.map(el =>
        el.id === input.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
