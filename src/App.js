import React,{useState} from 'react'
import { InputLabel,TextField,Button, ListItem,List } from '@material-ui/core';
import "./App.css"
import img from "./todo_img.png"
import Todos from "./Todos"
const App=()=>{
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const addinp =(e)=>{
         setInput(e.target.value)
      }
    const addtodo=(e)=>{

e.preventDefault();
        setTodos([...todos,input]);
        setInput("")
}
 
  return(
   <>
        <div className="maindiv">
        <div className="innerdiv">
        <h1><img src={img}/>Todo App</h1>
        <form>
        <InputLabel  >Write Todo here...</InputLabel>
        <TextField onChange={addinp} value={input}/>
        <Button onClick={addtodo} type="submit" variant="contained" color="secondary">Add Todo</Button>
        </form>
        <ol>
          {todos.map((todo)=>{
             return(
               <Todos to={todo}/>
             )
           })}
           </ol>
        
          </div>
     </div>

    </>
  )
}
export default App;