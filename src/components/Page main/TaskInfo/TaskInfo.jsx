import DeleteAllTasks from "../../../DeleteAllTasks/DeleteAllTasks";
import styles from "./TaskInfo.module.css";

const TaskInfo = (props) => {
  const { tasks, setTasks, setTextAlertModal } = props;

  const tasksCompleted = tasks.filter((task) => task.isDone).length;

  const tasksProgressBar = (tasksCompleted / tasks.length) * 100;

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
          <div>
            <h1 className={styles.h1_info}>
              Выполнено
              <span className={styles.span_info_total}>{tasksCompleted}</span>
              задач из
              <span className={styles.span_info_done}>{tasks.length}</span>
            </h1>
            <div className={styles.div_tab_task_completed}>
              <div
                className={styles.div_fill_scale}
                style={{
                  "--progress-width": `${tasksProgressBar}%`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <h1 className={styles.h1_info}>Список задач пуст</h1>
        )}
      </div>

      <DeleteAllTasks handleDeleleAllTasks={handleDeleleAllTasks} />
    </div>
  );
};
export default TaskInfo;
