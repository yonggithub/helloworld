/**
 * 底部组件
 */
import React, {Component} from 'react'
import './footer.css'

class TodoFooter extends Component {

 

  render() {

   
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成</span> / 全部
        </span>
        <button className="btn btn-danger"  >清除已完成任务</button>
      </div>
    )
  }
}

export default TodoFooter
