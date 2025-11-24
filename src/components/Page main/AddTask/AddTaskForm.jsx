import Button from "../../../componetns-chare/button/Button";
import Field from "../../../componetns-chare/Field/Field";

import styles from "./AddTask.module.css";

const AddTaskForm = (props) => {
  const {
    newTasktitle,
    setNewTaskTitle,
    setTasks,
    setTextAlertModal,
    setSearch,
  } = props;

  const handleSumbit = (event) => {
    event.preventDefault();
    addTask();
  };
  const addTask = () => {
    const newTask = newTasktitle.trim();
    if (newTask.length > 0) {
      const id = crypto?.randomUUID();
      const task = {
        title: newTask,
        id: id,
        isDone: false,
        time: 0,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setTextAlertModal(`Задача ${task.title} успешно добавлена!`);
      setNewTaskTitle("");
      setSearch("");
    }
  };

  return (
    <div className={styles.div_form_container}>
      <form className={styles.form} onSubmit={handleSumbit}>
        <Field
          id={"addTask"}
          type={"text"}
          text={"Введите название задачи"}
          className={styles.field_container}
          value={newTasktitle}
          onInput={(e) => setNewTaskTitle(e.target.value)}
        />

        <Button
          className={styles.button_add_task}
          children={
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="white" />
            </svg>
          }
          type={"submit"}
        />
      </form>
      <div className={styles.div_maximum_characters}>
        {newTasktitle.length >= 300 ? (
          <p className={styles.p_maximum_characters_max}>
            {newTasktitle.length} / 300
          </p>
        ) : (
          <p className={styles.div_maximum_characters_p}>
            {newTasktitle.length} / 300
          </p>
        )}
      </div>
    </div>
  );
};
export default AddTaskForm;
