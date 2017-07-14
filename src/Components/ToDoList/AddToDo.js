import React, {Component} from 'react';
import './ToDoItem.css';
export default class ToDoItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            toDoTitle: ''
        };

        this.onChange = this.onChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    onChange(e){
        console.log(this.state.toDoTitle);
        this.setState({
            toDoTitle: e.target.value
        });
    }

    handleAdd(){
        console.log(this.state.toDoTitle);
        this.props.propsHandleAdd(this.state.toDoTitle);
        this.setState({
            toDoTitle: ''
        });
    }

    render(){
        return(
            <div className="addToDoForm">
                <label>Name of ToDo</label><br/>
                <input type="text" onChange={this.onChange} value={this.state.toDoTitle} />
                <input type="submit" onClick={this.handleAdd} value="Add"/>
            </div>
        )
    }
}
