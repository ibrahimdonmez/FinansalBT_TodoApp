import React from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = e => {
    this.setState({ value : e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.value
    });
    this.setState({value : ''});
  };


  styles = StyleSheet.create({
    textInput: {
      width: "55%",
      color: "black",
      marginLeft: 22,
      marginTop: 5
    },
    Button: {
      padding: 16,
      color: "#fff",
      textTransform: "capitalize",
    }
  });

render(){
  return (
    <View onSubmit={this.handleSubmit.bind(this)} style={{alignItems:"center"}}>

            <TextInput
              label = "input"
              placeholder='örn: kek yapılacak'
              value={this.state.value}
              onChangeText={text => this.setState({ value: text })}
              name='text'
              style={this.styles.textInput}
              selectionColor="#5d0cff"
              placeholderTextColor="black"
            />

            <View style={{
              padding: 16,
              outline: "none",
              color: "#fff",
              textTransform: "capitalize",
            }}>

              <Button
                styles={this.styles.Button}
                onPress={this.handleSubmit.bind(this)}
                title="Listeye Ekle"
              ></Button>
            </View>
    </View>
        )
      }
  }
export default TodoForm;