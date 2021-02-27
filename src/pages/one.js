/*
 * @Description:one页面
 * @Autor: lifenglei
 * @Date: 2021-02-27 15:54:16
 */
import React,{Component} from 'react'
import { observer, inject } from 'mobx-react'
import './one.css'
@inject('oneStore')
  @observer
class One extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  changeStore() {
    this.props.oneStore.oneNum += 1
  }
  render() {
    let {oneNum} = this.props.oneStore
    return (
      <div>
        <h1>页面一数据为：{oneNum}</h1>
        <button type="button" onClick={() => this.props.history.push('/')}>
          跳转到首页
        </button>
        <button type="button"  className={`default-btn ${oneNum>100?'active':null}`} onClick={this.changeStore.bind(this)}>直接赋值修改页面一的初始数据</button>
        <button type="button" onClick={()=>this.props.oneStore.changeNum()}>通过action修改页面一的初始数据</button>
      </div>
    )
  }
}
export default One
