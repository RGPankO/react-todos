import React, { Component } from 'react';

import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';

export default class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toDos: []
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    componentWillMount(){
        this.setState({
            toDos: [
                {
                    id: 1,
                    name: 'First thing',
                    finished: false
                },
                {
                    id: 2,
                    name: 'Second thing',
                    finished: true
                },
                {
                    id: 3,
                    name: 'Third thing',
                    finished: true
                },
            ]
        });
    }

    toggleToDo(index){
        let toDos = this.state.toDos;
        toDos[index].finished = !toDos[index].finished;
        this.setState({
            toDos: toDos
        });
    }

    handleDelete(index){
        let toDos = this.state.toDos;
        toDos.splice(index, 1);
        this.setState({
            toDos: toDos
        });
    }

    handleAdd(toDoTitle){
        let toDo = {
            id: (this.state.toDos.length+1),
            name: toDoTitle,
            finished: false
        };
        let toDos = this.state.toDos;
        toDos.push(toDo);
        this.setState({
            toDos: toDos
        });
    }

    render() {

        let toDos = this.state.toDos.map((todo, index) => {
            return (
                <ToDoItem
                    key={index}
                    id={todo.id}
                    finished={todo.finished}
                    index={index}
                    name={todo.name}
                    handleClick={this.toggleToDo.bind(this, index)}
                    handleDelete={this.handleDelete.bind(this, index)}
                />
            )
        });
        return (
            <div className="todo-list-wrapper">
                <AddToDo propsHandleAdd={this.handleAdd} />
                <ul className="todo-list">
                    { toDos }
                </ul>
            </div>
        );
    }
}
