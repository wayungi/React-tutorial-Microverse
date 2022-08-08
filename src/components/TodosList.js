/*eslint-disable*/
/** @format */

import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}/>
        ))}
      </ul>
    );
  }
}

export default TodoList;
