import React from 'react'
import { InputLabel,TextField,Button } from '@material-ui/core';
import "./App.css"
import img from "./todo_img.png"

const App=()=>{
  return(
    <>
   
       <div className="maindiv">
   
        <div className="innerdiv">
         <h1><img src={img}/>Todo App</h1>
      
     <form>
        <InputLabel>Write Todo here...</InputLabel>
        <TextField/>
        <Button type="submit" variant="contained" color="secondary">Add Todo</Button>
        
      </form>

    

      </div>
     
    </div>

    </>
  )
}
export default App;