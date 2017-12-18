import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      todo : ''

    }
    this.todoHandler = this.todoHandler.bind(this)
  }

  todoHandler(ev){
    this.setState({
      todo : ev.target.value
    })
  }

  render() {
    return (
        
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo</h1>
        </header>


        <input type="text" className="form-control field" placeholder="Write Todo" name="todo" value={this.state.todo} onChange = {this.todoHandler}/>
        <button type="button" className="btn btn-primary">Add</button>
        
      </div>
    );
  }
}

export default App;
