import './App.css';
import React, {Component} from 'react';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : [
        {name:"todo - 1", id: this.genUUID(), done: ''},
        {name:"todo - 2", id: this.genUUID(), done: ''}
      ],
      showtasks: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let nameTask = document.querySelector("#toDoTaskName").value;
    this.setState({tasks: Array.prototype.concat(this.state.tasks, [{id: this.genUUID(), name: nameTask, done: ''}])});
    event.preventDefault();
  }

  removeTask = (id) => {
    const index = this.state.tasks.findIndex(p=>p.id === id);

    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);

    this.setState({tasks});
  };

  doneTask = (id) => {
    const index = this.state.tasks.findIndex(p=>p.id === id);
    let task = {...this.state.tasks[index]};
    if (task.done == 'done') {
      task.done = ''
    } else {
      task.done = 'done'
    }
    const tasks = [...this.state.tasks];
    tasks[index] = task;
    this.setState({tasks});
  }

  genUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  render() {
    let tasks = null;
    if(this.state.showtasks) {
      tasks = (
        <div className="App">
        <header className="App-header">
        {
            this.state.tasks.map((task, index) => {
              return <ToDoList
                key={task.id}
                name={task.name}
                isdone={task.done}
                remove={() => this.removeTask(task.id)}
                done={() => this.doneTask(task.id)}>
              </ToDoList>
            })
          }
        </header>
      </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="todo-add">
            <form onSubmit={this.handleSubmit}>
              <input id="toDoTaskName" type="text" placeholder="name of task" />
              <input className="todo-add-btn" type="submit" value="Add" />
            </form>
          </div>
          {tasks}
        </header>
      </div>
    )    
  }
}

export default App;
