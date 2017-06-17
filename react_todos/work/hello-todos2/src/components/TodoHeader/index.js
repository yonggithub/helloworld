/**
 * 头部组件
 */
import React, {Component} from 'react'
import './header.css'

class TodoHeader extends Component {
  

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

export default TodoHeader
