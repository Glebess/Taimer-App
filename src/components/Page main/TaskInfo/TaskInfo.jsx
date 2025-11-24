import DeleteAllTasks from "../../../DeleteAllTasks/DeleteAllTasks";
import styles from "./TaskInfo.module.css";

const TaskInfo = (props) => {
  const { tasks, setTasks, setTextAlertModal } = props;
  const isTaskHave = tasks.length > 0;

  const handleDeleleAllTasks = () => {
    if (confirm("Удалить все задачи?")) {
      setTextAlertModal("Все задачи успешно удалены!");
      setTasks([]);
    }
  };
  return (
    <div className={styles.div_info_tasks}>
      <div>
        {isTaskHave ? (
          <h1 className={styles.h1_info}>
            Выполнено
            <span className={styles.span_info_total}>
              {tasks.filter((task) => task.isDone).length}
            </span>
            задач из
            <span className={styles.span_info_done}>{tasks.length}</span>
          </h1>
        ) : (
          <h1 className={styles.h1_info}>Список задач пуст</h1>
        )}
      </div>

      <DeleteAllTasks handleDeleleAllTasks={handleDeleleAllTasks} />
    </div>
  );
};
export default TaskInfo;
