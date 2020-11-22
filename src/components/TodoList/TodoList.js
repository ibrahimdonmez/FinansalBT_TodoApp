
import React, { memo } from 'react';
import { View, Text } from "react-native";
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  addTodo = todo => {
    if (!todo.text) {
      return;
    }

    //   const newTodos = [todo, ...this.state.todos];
    this.state.todos.push(todo);
    this.forceUpdate();

    //console.log(this.state.todos)

  };

  updateTodo = (todoId, newValue) => {

    if (!newValue) {
      return;
    }

    let todos = [...this.state.todos];
    let index = todos.findIndex(el => el.id === todoId);
    if (index !== -1) {
      todos[index] = {...todos[index], text: newValue};
      this.setState({ todos });
      this.forceUpdate();
    }

  };

  removeTodo = id => {
    let todos = [...this.state.todos];
    let index = todos.findIndex(el => el.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      this.setState({todos});
    }
    this.state.de
    this.forceUpdate();
  };

  // completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  

  render() {

    return (

      <View>

        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 50,
          color: "black",
          fontSize: 24
        }}>
          Bugünkü Planın Ne ?
      </Text>
        <TodoForm onSubmit={this.addTodo.bind(this)} />

        <Todo
          todos={this.state.todos}
          //completeTodo={this.completeTodo.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
          updateTodo={this.updateTodo.bind(this)}
        />
      </View >
    )
  }

}

export default memo(TodoList);