import { useState } from "react";
import CreateTask from "../components/createArea";
import Task from "../components/task";
import { useEffect } from "react";
import Logout from "../features/logout";



// get data
const getitem = ()=>{
  let list = localStorage.getItem('lists');
  if(list){
      return(JSON.parse(list));
  }else{
    return([]);
  }
}


function Main() {
    const [tasksarr , setTask] = useState(getitem());
  
    function addTask(text){
        setTask((prevtasks)=>{
          return ([
            ...prevtasks, text
            
          ]);
        })
    }

    // storing items in local storage
    useEffect( ()=>{
        localStorage.setItem('lists' , JSON.stringify(tasksarr));
    },[tasksarr])

    

    function DeleteTask(id){
      setTask((prevTasks) => {
        return(prevTasks.filter((task,index)=>{
          return index !== id;
        }))
        
      })
    }
    return (
      <div className="main">
        <Logout/>
        <CreateTask
        onadd={addTask}
        />
        {tasksarr.map((ektask,index)=>{
          return (
            <Task
              key={index}
              id={index}
              text={ektask}
              onDelete={DeleteTask}
            />
          )
  
        })}
      </div>
    );
  }
  
  export default Main;
  