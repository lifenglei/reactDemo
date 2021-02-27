/*
 * @Description:home页面
 * @Autor: lifenglei
 * @Date: 2021-02-27 15:54:08
 */
import React,{Component} from 'react'
import { observer, inject } from 'mobx-react'
@inject("homeStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.homeStore) 
    this.state = {}
  }
  render() {
    let {homeNum} = this.props.homeStore
    return (
      <div>
        <div style={{
      width: '100%',
      height: '500px',
      display:homeNum>100?'block':'none'
    }}>这是首页</div>
        <h1>首页数据源的num为:{ homeNum}</h1>
        <button type="button" onClick={() => this.props.history.push('/one')}>
          跳转到第一个页面
        </button>
        <button type="button" onClick={() => this.props.homeStore.addNum() }>点击添加</button>
        <button type="button" onClick={() => this.props.homeStore.lessNum() }>点击减少</button>
      </div>
    )
  }
}
export default Home
