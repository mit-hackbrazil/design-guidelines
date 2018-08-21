import React, { Component } from 'react';

/*custom components*/
import TasksList from "./components/TasksList";

const defaultTasks = [
  {
    name: "tarefa 1",
    active: true,
    done: true,
    start: "1/10/2018",
    end: "2/10/2018"
  },
  {
    name: "tarefa 2",
    active: true,
    done: false,
    start: "10/10/2018",
    end: "12/10/2018"
  },
  {
    name: "tarefa 3",
    active: false,
    done: false,
    start: "10/10/2018",
    end: "12/10/2018"
  }
  /*..*/
];

class App extends Component {
  render() {
    return (
      <div>
        <TasksList tasks={defaultTasks} />
      </div>
    );
  }
}

export default App;
