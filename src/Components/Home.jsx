import React,{useEffect, useState} from 'react'
import Task from './Task'
function Home() {
    const InitialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks, setTasks]= useState(InitialArray);
    const [title, setTitle]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        setTasks([...tasks,{title}]);
        setTitle("");
       
    };
    const deleteTask=(index)=>{
    const filteredarr = tasks.filter((val,i)=>{
        return i !==index;
    })
    // console.log(filteredarr)
    setTasks(filteredarr);
   };
   useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
   },[tasks])
  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <h1>Daily Goals</h1>
            <input type="text" name="" id="input"  value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" className=' btn btn-danger' value="Add"/>
        </form>
        {tasks.map((item,index)=>(
            <Task key={index} title={item.title} deleteTask={deleteTask} index={index}/>
            ))}
    </div>
  )
}

export default Home