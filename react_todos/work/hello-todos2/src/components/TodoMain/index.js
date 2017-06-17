/**
 * 主体列表组件
 */
import React, {Component, PropTypes} from 'react'
import TodoItem from '../TodoItem'
import './main.css'

class TodoMain extends Component {
  render() {
    return (
      <ul className="todo-main">
        {
         <li>
            <TodoItem />
         </li>
        }
      </ul>
    )
  }
}


export default TodoMain
