import React from 'react'
import { InputLabel,TextField,Button } from '@material-ui/core';

const App=()=>{
  return(
    <>
    <div>
      <div>
      <h1>Todo App</h1>
      <form>
        <InputLabel>Write Todo here</InputLabel>
        <TextField></TextField>
        <Button variant="contained" color="secondary">Add Todo</Button>
        
      </form>

    

      </div>
     
    </div>

    </>
  )
}
export default App;