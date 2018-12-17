import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './TodoList.less'
class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Fragment>
                <div>
                    <Input
                        className="todo-input"
                        placeholder="请添加事项"
                    ></Input>
                    <Button type="primary" className="todo-btn">添加</Button>
                </div>
            </Fragment>
        )
    }
}
export default TodoList