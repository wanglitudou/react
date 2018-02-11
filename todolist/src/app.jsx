import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
        this.oninput = this.oninput.bind(this);
        this.add = this.add.bind(this);
    }
    componentDidMount() {
        console.log(this.props)
    }
    add(e) {
        if (e.keyCode !== 13) return;
        this.props.add(this.state.value)
        this.setState({
            value: ''
        })

    }

    oninput(e) {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    toggleStatue(item) {
        this.props.updateStatus({
            target: item.data,
            newStatus: item.status == 'pending' ? 'finished' : 'pending'
        })
    }


    render() {
        let { value } = this.state;
        let { todolist, filter,clear} = this.props;

        return <div className="todolist">
            <p><input value={value} onInput={this.oninput} type="text" onKeyDown={this.add} /></p>
            <ul className="todo-list">
                {
                    todolist.map((item, index) => {
                        return <li key={item.data} className={item.status !== 'pending' ? 'checked todo-item' : 'todo-item'}><span onClick={() => { this.toggleStatue(item) }} className="checkbox "></span>{item.data}</li>
                    })
                }

            </ul>
            <p>
                <button className="selected" onClick={() => {filter('all') }}>全部</button>
                <button onClick={() => {filter('pending') }}>正在做</button>
                <button onClick={() => {filter('finished') }}>已完成</button>
                <span onClick={clear}>清除已完成的</span>
            </p>
        </div>
    }
}

function filter_list(todolist,filter){
   if(filter=='all') return todolist

    let arr=[];
    todolist.forEach(item=>{
        if(item.status==filter){
            arr.push(item)
        }
    })
     return arr;
}
function mapStateToProps(state) {
    return {
        todolist:filter_list(state.todolist,state.filter)
    }
}
function mapDispatchToProp(dispatch) {
    return {
        add: function (data) {
            dispatch({
                type: "add",
                data: {
                    data: data,
                    status: 'pending'
                }
            })
        },
        updateStatus: function (obj) {
            dispatch({
                type: "updateStatus",
                data:obj
            })
        },
        filter(type) {
            dispatch({
                type: 'filter-name',
                text: type
            })
        },
        clear(){
            dispatch({
                type:'clear'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(TodoList)