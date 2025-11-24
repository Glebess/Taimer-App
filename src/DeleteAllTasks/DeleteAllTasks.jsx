import AlertStyle from "../componetns-chare/AlertStyle/AlertStyle";
import styles from "./DeleteAllTasks.module.css";

const DeleteAllTasks = (props) => {
  const { handleDeleleAllTasks } = props;

  return (
    <div className={styles.div_delete_all_tasks}>
      <button
        className={styles.button_delete_all_task}
        onClick={handleDeleleAllTasks}
      >
        Удалить все задачи
      </button>
    </div>
  );
};
export default DeleteAllTasks;
