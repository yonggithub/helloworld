/**
 * Todo列表项组件
 */
import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import './item.css'

class TodoItem extends Component {

  

  render() {
    return (
      <li >
        <label>
          <input type="checkbox"/>
          <span></span>
        </label>
        <button className="btn btn-danger" >删除</button>
      </li>
    )
  }
}


export default TodoItem
