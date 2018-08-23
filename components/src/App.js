import React, { Component } from 'react';

/*custom components*/
import TasksList from "./components/TasksList";
import TeamHeader from "./components/TeamHeader";
import Calendar from "./components/Calendar";

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
  },
  {
    name: "tarefa 3",
    active: false,
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

let team = {
  name: "NASA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
  description: "Exploring the Space and Hiring the best MIT undergrads",
  link: 'http://nasa.gov'
}

const events = [
  {
    start: '2018-08-20',
    end: '2018-09-02',
    eventClasses: 'optionalEvent',
    title: 'test event',
    description: 'This is a test description of an event',
  },
  {
    start: '2018-08-19',
    end: '2018-08-25',
    title: 'test event',
    description: 'This is a test description of an event',
    data: 'you can add what ever random data you may want to use later',
  },
];

class App extends Component {
  render() {
    return (
      <div>

        <TeamHeader team={team} />
        <TasksList tasks={defaultTasks} />
        <h2>CALENDAR</h2>
        <Calendar events={events} />

        <h2>POSTS</h2>
      </div>
    );
  }
}

export default App;
