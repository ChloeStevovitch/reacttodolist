import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';




const NEW_TASK_DEFAULT = {
    description: '',
    isDone: false,
    isArchived: false,
}

let BDD = [];
let ID = 0;
class App extends Component {

    constructor(props) {
        super(props);

        this.state = NEW_TASK_DEFAULT

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this)

    }

    componentDidMount(){
       let url = 'mongodb://heroku_85hw7c2c:asu874emede1m1068f4hklb8vc@ds147946.mlab.com:47946/heroku_85hw7c2c'
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
                let tasks = data.map((task,index) => {
                    return (
                        <h3>task.description</h3>
                    )
                })
                this.setState({tasks: tasks})
            })
    }

    handleChange(event) {
        this.setState({description: event.target.value});
        event.preventDefault();

    }
    toggleCheckbox(element) {
        let idtofind = element.target.value;
        console.log(idtofind)
        console.log(element)
        let i = BDD.findIndex(x => String(x.id) === idtofind)
        console.log(i)
        console.log(BDD[i].isDone)
        if  (BDD[i].isDone){
            BDD[i].isDone=false;
        }else{
            BDD[i].isDone=true;
        }
        element.checked = !element.checked;

        element.preventDefault();
    }

    loadTask(){

    }
    handleSubmit(event) {
        if (document.getElementById("taskInput").value) {
            let newTask = {description : this.state.description, isDone : this.state.isDone, isArchived : this.state.isArchived, date: new Date (), id:ID};
            ID=ID+1;
            BDD.unshift(newTask)
            this.setState(NEW_TASK_DEFAULT);
            document.getElementById("taskInput").value = '';
        }

        event.preventDefault();
    }



    render() {


        const Totitle = (props)  => {
            return (<h1>{props.message}</h1>)
        }
        const ToArray = () => {
            return (BDD.map((item,i) =><li key={i}> <Coche value={item.id} attr={{isDone: item.isDone}} onChange={e =>this.toggleCheckbox(e)} type="checkbox"/> <span style={{color : item.isDone ? 'grey' : 'white'}}>{item.description}</span></li>))
        }
        return (
            <div className="App">
                <header className="App-header">
                    <Totitle message='My todolist'/>

                {this.state.posts}
                    <form>
                        <ul style={{listStyleType: 'none', textAlign:'left', paddingLeft:0, width: '80%'}}>
                            <Li>{this.state.description}</Li>
                            <ToArray />

                        </ul>
                    </form>


                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label>
                            New task :
                            <input id='taskInput' type="text" onChange={e => this.handleChange(e)} />
                        </label>
                        <input type="submit"value="Save" />
                    </form>

                </header>
            </div>
        );
    }
}

const Li = styled.li`
  text-align:'left!';
  list-style-type:'none!';
`;






const Coche = styled.input`
`;

export default App;
