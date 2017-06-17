/**
 * 应用组件
 */
import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import TodoHeader from '../TodoHeader'
import TodoMain from '../TodoMain'
import TodoFooter from '../TodoFooter'
import './app.css'

class App extends Component {
constructor(props){
  super(props)
  this.state={
    title:[name:{}]
  }
}
  

  render() {

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {
          <TodoHeader />
 
       
          }
        </div>
      </div>
    )
  }

}

export default App
