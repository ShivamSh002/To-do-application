import React from 'react';
import "./Task.css";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Task = ({ data, handleDelete }) => {
  console.log("task:", data);

  return (
    <div>
      {data.map((task, index) => (
        <div key={index} className='taskBox'>
          <p>{task}</p>
          <div>
            <DeleteForeverRoundedIcon
              className='icon'
              onClick={() => handleDelete(task)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
