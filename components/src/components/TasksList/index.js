/*
example of props
[
 {
    name: "tarefa 1",
    active: true,
    done: true,
    start: "1/10/2018",
    end: "2/10/2018"
  }, ...
]

*/
import React, { Component } from "react";
import { } from "./tasks-lists.css";

//images
import task_default from "./task-default.svg";
import task_open from "./task-open.svg";
import task_ready from "./task-ready.svg";

class Task extends Component {
    render() {
        let { name, active, done, start, end } = this.props.task;
        let imageSrc;

        if (done)
            imageSrc = task_ready;
        else if (active && !done)
            imageSrc = task_open;
        else
            imageSrc = task_default;

        return (<div className="task-item" >
            <div>{name}</div>

            <div className="task-circle">
                <img src={imageSrc} />
            </div>

            <div className="task-dates">{start}<br />{end}</div>
        </div >);
    }
}

class TasksList extends Component {


    render() {
        //convert all tasks
        let { tasks } = this.props;
        let tasksList = tasks.map((task, index) => {
            return <Task key={"task-" + index} task={task} />;
        })

        return <div className="task-list">{tasksList}</div>
    }
}

export default TasksList;