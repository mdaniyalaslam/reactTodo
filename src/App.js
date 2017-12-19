import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''

    }
    this.todoHandler = this.todoHandler.bind(this)
    this.btnHandler = this.btnHandler.bind(this)
  }

  todoHandler(ev) {
    this.setState({
      todo: ev.target.value
    })
  }

  btnHandler(ev){
    let list = this.state.todo
    console.log(list)

  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo</h1>
        </header>


        <input type="text"
          className="form-control field"
          placeholder="Write Todo"
          name="todo" value={this.state.todo}
          onChange={this.todoHandler}
        />

        <button type="button" className="btn btn-primary" onClick={this.btnHandler}>Add</button>
        <li>{this.btnHandler}</li>

      </div>
    );
  }
}

export default App;
