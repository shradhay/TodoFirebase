import React from "react"
import {ListItem,ListItemText,List} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./App.css"

const Todos =(props)=>{
    


    return(
        <>
        <div className="todolist">
            <div >
                <List>
            <ListItem>
                
                <ListItemText primary="Todo" secondary={props.name}> </ListItemText>
                <DeleteForeverIcon onClick ={()=>{
                    return(
                        props.onSelect(props.id)
                    )
                   
                }}/>
                    </ListItem>
                    
                    </List>

            </div>
       
        </div>

        
        
        </>
    )
}
export default Todos;