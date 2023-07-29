import styles from './form.module.css'
import React, {ChangeEvent, FormEvent} from "react";
import {TaskInterface} from "../TaskList/Interfaces.tsx";

interface FormProps {
    setTaskList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}

function Form({setTaskList}: FormProps) {
    const [task, setTask] = React.useState<string>('')

    function submitTask(e: FormEvent){
        e.preventDefault()
        if(task.length > 3){
            setTaskList((prevTasks)=> {
                return [...prevTasks, {
                    id: prevTasks.length + 1,
                    completed: false,
                    task: task
                }]
            })
        }

        setTask('')
    }

    function handleChange({target} : ChangeEvent<HTMLInputElement>){
        setTask(target.value)
    }

    return (
        <form onSubmit={submitTask} className={styles.wrapper}>
            <input onChange={handleChange} value={task} className={styles.inputStyle} placeholder={'Adicione uma nova tarefa..'}/>
            <button className={styles.btnStyle}> Criar
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    );
}

export default Form;