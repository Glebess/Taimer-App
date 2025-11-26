import Item from "../Item/Item";
import styles from "./ListItem.module.css";
// import { useState } from "react";

const ListItem = (props) => {
  const {
    setTextAlertModal,
    setTasks,
    tasks,
    handleStartTimer,
    handlePauseTimer,
    search,
  } = props;

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmitTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (deleteId) => {
    setTasks(tasks.filter((task) => task.id != deleteId));
    setTextAlertModal(`Задача успешно удалена!`);
  };

  const IsHaveTasks = () => {
    if (tasks.length === 0) {
      return (
        <div className={styles.div_container}>
          <h1 className={styles.h1_no_tasks}>Список задач пуст</h1>
        </div>
      );
    } else if (filteredTasks.length === 0) {
      return (
        <div className={styles.div_container}>
          <h1 className={styles.h1_no_tasks}>
            Нет запросов удовлетворяющий поиск
          </h1>
        </div>
      );
    } else {
      return (
        <Item
          filteredTasks={filteredTasks}
          deleteTask={deleteTask}
          handleSubmitTask={handleSubmitTask}
          handlePauseTimer={handlePauseTimer}
          handleStartTimer={handleStartTimer}
          setTasks={setTasks}
        />
      );
    }
  };

  return <div>{IsHaveTasks()}</div>;
};
export default ListItem;
