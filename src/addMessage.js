import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import { Component } from 'react';
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
         action.message
      ];
    default:
      return state;
  }
};

export const store = createStore(messageReducer);

// React:

// Change code below this line
class Presentational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    // this.setState((state) => ({
    //   input: '',
    //   messages: state.messages.concat(state.input)
    // }));
    this.props.submitNewMessage(this.state.input);
   
    this.setState({
      input: ''
    });

  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
           { this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
           }
          

        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);




class AppWrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <Container/>
        </Provider>
      );
    }
  };

  export default AppWrapper