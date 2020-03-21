// import React from "react";
import Todolist from "./components/Todolist";
import TodosData from "./TodosData";

// function App() {
//   const todoitems = TodosData.map(items => (
//     <Todolist
//       key={items.id}
//       item={items.text}
//       done={items.completed}
//       remind={items.reminder}
//     />
//   ));

//   return <div className="App">{todoitems}</div>;
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:TodosData
    }
    this.handlechange=this.handlechange.bind(this)
  }
  handlechange(){
    console.log("change",)
  }

  render() {
    const todoitems = this.state.todos.map(items => (
          <Todolist
             handleChange={this.handlechange}
             key={items.id}
             item={items.text}
             done={items.completed}
             remind={items.reminder}
           />
         ));
    return (
      <div>
        <div className="App">{todoitems}</div>
      </div>
    )
  }
}
