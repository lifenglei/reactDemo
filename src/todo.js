/*
 * @Description:react 做todolist
 * @Autor: lifenglei
 * @Date: 2021-02-27 09:31:47
 */
import React, { Component } from 'react'
import {getStorage,setStorage} from '../src/utils/localStorage'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      inputValue: '',
      list: []
    }
  }
  componentDidMount() {
    this.setState({
      list:getStorage()
    })
  }
 
  setInputValue(e) {
    this.setState({
      inputValue:e.target.value
    })
  }
  addItem() {
    const { inputValue } = this.state
    this.setState({
      list: setStorage({
        id: new Date().getTime(),
        text:inputValue
      })
    })
  }
  removeItem(data) {
    this.setState({
      list:setStorage(null,data)
    })
  }

  render() {
    const { list } = this.state
    return (
      <div className="wrapper">
        <div className="input-box">
          <input type="text" placeholder="请输入项目" onChange={this.setInputValue.bind(this)} />
          <button type="button" onClick={this.addItem.bind(this)}>Click Me!</button>
        </div>
        <div className="list-box">
          <ul className="list">
            {
              list && list.map((item,index) => {
                return (
                  <li key={index}>
                    <span>{item.text}</span>
                    <button type="button" onClick={this.removeItem.bind(this,item.id)}>删除</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default ToDoList
