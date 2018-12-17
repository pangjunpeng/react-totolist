import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './TodoList.scss'

class TodoList extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        const data = [
            '1',
            '2'
        ]
        return (
            <Fragment>
                <div>
                    <Input
                        className="todo-input"
                        placeholder="请添加事项"
                    ></Input>
                    <Button type="primary" className="todo-btn">添加</Button>
                </div>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </Fragment>
        )
    }
}
export default TodoList