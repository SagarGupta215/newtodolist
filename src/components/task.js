import React from 'react'

function Task(props) {
  function HandleClick(){
      props.onDelete(props.id);
  }
  return (
    <div className='task'>
        <p>{props.text}</p>
        <button onClick={HandleClick}>DONE</button>
    </div>
  )
}

export default Task;