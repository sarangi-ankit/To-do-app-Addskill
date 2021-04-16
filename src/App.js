import React, { Component } from "react";
import Axios from "axios";
import "./index.css"




class App extends Component{
        state={todos:[]}; 
        constructor(){
        super()
        this.state={todos: []};
    
    }

    addList=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
           this.setState({todos:response.data.slice(0,40)})
        })
        
    }

    render(){
        return(
            <div>
                <h1>To Do-app</h1>
                <button className="list" onClick={this.addList}>Fetch</button>
                 {this.state.todos.length>0?(
                    <div>
                        <ul>
                            {this.state.todos.map(todo=>(
                            <li key={todo.id}>
                                {todo.title}
                                <span className="marker">
                                    <input className="checked-box" type="checkbox" checked={todo.completed} />
                                </span>

                            </li>
                            )

                            )}
                        </ul>
                        
                    </div>
                ):(
                    <div>
                        
                    </div>
                )
            }
            </div> 
        )
    }
}
export default App;