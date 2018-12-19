import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './TodoList.scss'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            iptValue: '',
            list: [1,2,3,4,5,6]
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.delItem = this.delItem.bind(this)
    }
    handleChange(e){
        this.setState({
            iptValue: e.target.value
        })
    }
    addItem(){
        this.setState( () => {
            return {
                list: [...this.state.list, this.state.iptValue],
                iptValue: ''
            }
        })
    }
    delItem(index){
        this.setState( () => {
            this.state.list.splice(index, 1)
            const list = this.state.list
            return {
                list
            }
        })
    }
    render(){
        return (
            <div className="todo-wrapper">
                <div className="todo-ipt-wrapper">
                    <Input
                        className="todo-input"
                        placeholder="请添加事项"
                        value={this.state.iptValue}
                        onChange={this.handleChange}
                    ></Input>
                    <Button type="primary" className="todo-btn" onClick={this.addItem}>添加</Button>
                </div>
                <List
                    className="todo-list"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.delItem.bind(null,index)}>{item}</List.Item>)}
                    locale={{emptyText: '没有数据了'}}
                />
            </div>
        )
    }
}
export default TodoList