import TasksHeader from "./components/tasksHeader/TasksHeader.tsx";
import Header from "./components/Header/Header.tsx";
import Form from "./components/Form/Form.tsx";
import React from "react";
import EmptyTaskMessage from "./components/TaskList/EmptyTaskMessage/EmptyTaskMessage.tsx";
import Task from "./components/TaskList/Task/Task.tsx";
import {TaskInterface} from "./components/TaskList/Interfaces.tsx";
import './cssGlobal/reset.css'
import './cssGlobal/global.css'

function App() {
    const [taskList, setTaskList] = React.useState<Array<TaskInterface>>([])

  return (
    <>
        <Header/>
        <main>
            <Form setTaskList={setTaskList}/>
            <TasksHeader tasks={taskList}/>

            <section>
                { taskList.length > 0
                    ? taskList.map(task => <Task key={task.id} setTaskList={setTaskList} data={task}/>).reverse()
                    : <EmptyTaskMessage/>
                }
            </section>
        </main>
    </>
  )
}

export default App
