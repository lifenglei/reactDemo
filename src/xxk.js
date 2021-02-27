/*
 * @Description:
 * @Autor: lifenglei
 * @Date: 2021-02-26 10:50:54
 */
import React, { Component } from "react"; // 引入react模块
import "./xxk.css"; // 引入xxk.css样式

function SquareButton(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {" "}
      {props.value}{" "}
    </button>
  );
}


class Xxk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 初始化状态
      tits: ["精选", "热点", "娱乐", "新闻"],
      cons: ["内容111", "内容222", "内容333", "内容444"],
      curr: 0, // 定义一个状态用来判断
    };
  }
  renderSquare(i) {
    return <SquareButton value={i} onClick={() => this.handleClick(i)} />;
  }

  dj(n) {
    this.setState({
      curr: n,
    }); // 更新curr的状态为n（下标）
  }
  getX() {
    return <div className="like"> </div>;
  }
  render() {
    return (
      <div className="box">
        <ul>
          {this.state.tits.map((v, i) => {
            return (
              <li
                key={i}
                onClick={this.dj.bind(this, i)}
                className={this.state.curr === i ? "active" : ""}
              >
                {v}
              </li>
            );
          })}
        </ul>
        <ol>
          {this.state.cons.map((v, i) => {
            return (
              <li
                key={i}
                style={{
                  display: this.state.curr === i ? "block" : "none",
                }}
              >
                {v}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Xxk; // 导出
