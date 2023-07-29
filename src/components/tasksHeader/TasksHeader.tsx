import styles from './tasksHeader.module.css'
import {TaskInterface} from "../TaskList/Interfaces.tsx";

interface TasksHeaderProps{
    tasks: Array<TaskInterface>
}

function TasksHeader({tasks} : TasksHeaderProps) {
    const tasksCompleted = tasks.filter((task)=>{
        return task.completed
    })


    return (
        <section className={styles.wrapper}>
            <h1 className={styles.titleTotalTasks}> Tarefas Criadas
                <span className={styles.totalTasks}>{tasks.length}</span>
            </h1>

            <h1 className={styles.titleCompletedTasks}> Concluídas
                <span className={styles.completedTasks}>{tasksCompleted.length}</span>
            </h1>
        </section>
    );
}

export default TasksHeader;