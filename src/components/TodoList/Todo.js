import React from 'react';
import { View, Text, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      value: ''
    }
  }

  submitUpdate = value => {
    this.props.updateTodo(this.state.id, this.state.value);

    this.setState({
      id: null,
      value: ''
    })
  };

  render() {
    //onsole.log(this.props.todo)
    if (this.state.id) {
      return (
        <View>
          <TextInput
            placeholder='Güncelle'
            value={this.state.value}
            onChangeText={text => this.setState({ value: text })}
            //onChange={this.handleChange}
            name='text'
            // style={this.styles.textInput}
            selectionColor="#5d0cff"
            placeholderTextColor="white"
          />

          <Button
            onPress={this.submitUpdate.bind(this)}
            title="Güncelle"
          ></Button></View>)
      // </>;<TodoForm edit={this.state} onSubmit={this.submitUpdate.bind(this)}/>;
    }
    return (
      <View>
        {this.props.todos.map((todo, index) => {
          return (
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //margin: "4px auto",
                color: "#fff",
                padding: 16,
                borderRadius: 15,
                width: "100%",
                marginTop: 5,
                backgroundColor: "orange"
              }}
              // {todo.isComplete ? 'todo-row complete' : 'todo-row'}
              key={index}
            >
              <View
                key={todo.id} >
                  {/* onClick={() => completeTodo(todo.id)} */}
                <Text>{todo.text}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>

                <Icon.Button name="pencil" size={25} onPress={() => this.setState({ id: todo.id, value: todo.text })} backgroundColor="#FFA500"/>
                <Icon.Button name="trash" size={25} onPress={() => this.props.removeTodo(todo.id)} backgroundColor="#FFA500"/>
                
              </View>
            </View>


          );
        })}

      </View>
    )
  }

}

export default Todo;