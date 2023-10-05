
import React ,{useState} from "react";

export default function CreateTask(props){
    const [text , setText] = useState("");
    
    function handleChange(event) {
        const newtext = event.target.value;
        setText(newtext);
    }
    

    function addTask(event){
        props.onadd(text);
        setText("");
        event.preventDefault();
    }

    return(
        <div className="form">
            <form>
                <input type="text" onChange={handleChange} value={text} placeholder="write a task"/>
                <button onClick={addTask}>Add</button>
            </form>
        </div>
    )


}