import React, { useState } from 'react';
import "./App.css";
import BasicTextFields from './InputBox/Input';
import Task from './InputBox/Task';

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const handleDelete = (taskToDelete) => {
    setData(data.filter(task => task !== taskToDelete));
  };

  return (
    <div className='mainWrapper'>
      <h1>TO DO APPLICATION</h1>
      <div className='taskWrapper'>
        <BasicTextFields data={data} setData={setData} />
        {data.length > 0 ? <div><Task data={data} handleDelete={handleDelete} /></div> : ""}
      </div>
    </div>
  );
}

export default App;
