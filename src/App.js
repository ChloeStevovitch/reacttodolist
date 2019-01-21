import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';






const Tasks =['faire des courses','aller au cours de chant'];

const liStyle = {
    listStyleType: 'none',
    textAlign: 'left'

};

const checkboxStyle = {
};


function Toarray(props) {
    var array = props.tab.map(elmt => <li style={liStyle}> <input type="checkbox" style={checkboxStyle}/> {elmt} </li>);
    return <ul>{array}</ul>
}

function Totitle(props) {
    return <h1>{props.message}</h1>
}

function Livepreview(props){
    return <ul><li style={liStyle}>{props.value}</li></ul>
}



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value!='') {
            Tasks.unshift(this.state.value);
            this.state.value='';
            document.getElementById("taskInput").value='';
        }
        event.preventDefault();

    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
            <Totitle message='My todolist'/>
          <p>
            <Toarray tab={[this.state.value].concat(Tasks)}/>
              <form  onSubmit={this.handleSubmit}>
                  <label>
                      New task :
                      <input id='taskInput' type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Save" />
              </form>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
