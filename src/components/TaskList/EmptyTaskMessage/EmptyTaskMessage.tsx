import styles from './emptyTasksMessage.module.css'
import icon from '../../../assets/todoiconpb.png'

function EmptyTaskMessage() {
    return (
        <section className={`${styles.wrapper} ${styles.showing}`}>
            <picture className={styles.iconWrapper}>
                <img src={icon} alt=""/>
            </picture>
            <h2 className={styles.title}>Você ainda não possui taredas cadastradas.</h2>
            <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer.</p>
        </section>
    );
}

export default EmptyTaskMessage;