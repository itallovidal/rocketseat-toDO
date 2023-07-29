import animate from '../../../cssGlobal/animations.module.css'
import {TaskInterface} from "../Interfaces.tsx";
import styles from './task.module.css'
import React from "react";

interface TaskProps{
    data: TaskInterface,
    setTaskList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}
function Task({data, setTaskList} : TaskProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)
    console.log(data)

    function deleteTask(){
        setTaskList((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== data.id
            })
        })
    }

    function handleCheck(){
        setIsChecked(!isChecked)
        setTaskList((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id){
                    prevTask.completed = !prevTask.completed
                }
                return prevTask
            })
        })
    }


    return (
        <div className={`${styles.wrapper} ${animate.showing}`}>
            <span
                onClick={handleCheck}
                className={`${styles.checkbox} ${isChecked && styles.checked}`}> </span>

            <p  className={`${styles.task} ${isChecked && styles.taskChecked}`}>{data.task}</p>
            <i onClick={deleteTask} className={`fa-solid fa-trash-can ${styles.deleteTask}`}></i>
        </div>
    );
}

export default Task;