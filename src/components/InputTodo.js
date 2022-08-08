/** @format */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  /*
    state = {
        title: ""
    };
 */

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    if (title.trim()) {
      const { addTodoProps } = this.props;
      addTodoProps(title);
      this.setState({ title: '' });
    } else {
      console.log('Please Add item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          name="title"
          onChange={this.onChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
