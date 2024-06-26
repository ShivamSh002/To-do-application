import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState , useEffect } from 'react';

export default function BasicTextFields({data,setData}) {
    const[newTask,setNewTask]=useState("")

    

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

  

const handleSubmit = (event)=>{
event.preventDefault();
       
        console.log("New Task:", newTask);
       
        setNewTask(""); 
        if(newTask === ""){
            return;
        }
        
        setData(prevTasks => [...prevTasks, newTask])
       
       
}
  return (
  <div>  
    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '50ch' },
  }}
  noValidate
  autoComplete="off"
onSubmit={handleSubmit}
>
  <TextField 
    id="outlined-basic" 
    label="Create Your Task Here..." 
    variant="outlined" 
    value={newTask}
    onChange={handleChange}/>
  <Button variant="contained" sx={{backgroundColor : "purple", padding : "15px", width : "200px !important"}} type="submit">Add</Button>
</Box>
<hr/>

</div>
  );
}