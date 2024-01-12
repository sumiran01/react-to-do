import React from 'react'
import "./CSS/style.css"
import '@fortawesome/react-fontawesome'
import 'react-bootstrap'
const Task = ({title,deleteTask,index}) => {
  return (
    <div className='task'>
      <div>
        <p>{title}
      
    <i class="fa-solid fa-trash" onClick={()=>deleteTask(index)}></i>
      </p>
      </div>
    </div>
  )
}

export default Task