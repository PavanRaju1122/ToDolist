import { useState } from "react";
import React from "react";



function Todo(){
const[taskValue,setTaskValue]=useState("")
const [taskList,setTaskList]=useState(["Wake up at 10am","Make the break fast","eat the break fast"])

function AddT(){
    if (taskValue){
        setTaskList([...taskList,taskValue])
    setTaskValue("")
    }
    setTaskList([...taskList,taskValue])
    setTaskValue("")


}


function ETask(e){
    if (e.target.value){
    setTaskValue(e.target.value);
    
    }

}



function handDown(index){ 
if(index<taskList.length-1){
const newdn=[...taskList];
   [newdn[index],newdn[index+1]]=[newdn[index+1],newdn[index]]
   setTaskList(newdn)
}
}


function handUp(index){
    if(index>0){
        const newup=[...taskList];
           [newup[index],newup[index-1]]=[newup[index-1],newup[index]]
           setTaskList(newup)
        }
}


function handDel(index){
    const newList=taskList.filter((_,i)=>i!==index)
    setTaskList(newList)
    
}

    return <>
    <div>
    <div className="top" style={{marginTop:"30px"}}>
        <input onChange={(e)=>ETask(e)}  value={taskValue} placeholder="Add Task To D0" style={{width:"300px",marginLeft:"470px"}}/>
        <button onClick={AddT} style={{backgroundColor:"green"}}> Add</button>
    </div>
        <div className="container"  style={{marginLeft:"425px",marginTop:"30px"}}>
        
            <div className="Task" >{taskList.map((items,index)=>
                <ol className="order" key={index}>
                   <div className="Items">
                        <div>
                            <p>{items}</p>
                        </div>
                    <div className="buttons">
                        <div className="button" onClick={()=>handUp(index)}>&#9650;</div>
                        <div className="button" onClick={()=>handDown(index)}>&#9660;</div>
                        <div className="button" style={{backgroundColor:"red"}} onClick={()=>handDel(index)}>D</div>
                     </div>
                     </div>
                </ol>)}

            </div>
       
    </div>
    </div>
    </>
}
export default Todo;