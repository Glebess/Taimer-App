import { useState } from "react";
import AddTaskForm from "..//AddTask/AddTaskForm";
import SearchTask from "..//SearchTask/SearchTask";
import styles from "./Taimer.module.css";
import ListItem from "..//ListItem.jsx/ListItem";
import TaskInfo from "..//TaskInfo/TaskInfo";
import AlertStyle from "..//..//..//componetns-chare/AlertStyle/AlertStyle";

const Taimer = () => {
  const [newTasktitle, setNewTaskTitle] = useState("");
  const [search, setSearch] = useState("");

  const [textAlertModal, setTextAlertModal] = useState("");

  // const [choiceTaimerSector, setChoiceTaimerSector] = useState("main");

  const [tasks, setTasks] = useState([
    {
      title: "Погладить кота",
      id: "task-1",
      isDone: false,
      time: 0,
      isRunning: false,
      isEdit: false,
    },
    {
      title:
        "1222222222222222222222222222222222222222222222222222222222222222222222",
      id: "task-2",
      isDone: true,
      time: 0,
      isRunning: false,
      isEdit: false,
    },
  ]);

  const isShowAlert = textAlertModal !== "";

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) => {
  //         if (task.isRunning && !task.isDone) {
  //           return { ...task, time: task.time + 1 };
  //         }
  //         return task;
  //       })
  //     );
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleStartTimer = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, isRunning: true } : task
  //     )
  //   );
  // };
  // const handlePauseTimer = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, isRunning: false } : task
  //     )
  //   );
  // };

  return (
    <>
      <div className={styles.taimerContainer}>
        {isShowAlert && (
          <AlertStyle
            text={textAlertModal}
            success={true}
            setTextAlertModal={setTextAlertModal}
          />
        )}
        {/* <h1 className={styles.h1Name}>Тайм-менеджмент</h1> */}
        <div className={styles.taimer_main_div}>
          <AddTaskForm
            setTasks={setTasks}
            newTasktitle={newTasktitle}
            setNewTaskTitle={setNewTaskTitle}
            setTextAlertModal={setTextAlertModal}
            textAlertModal={textAlertModal}
            setSearch={setSearch}
          />
          <SearchTask search={search} setSearch={setSearch} />

          <TaskInfo
            tasks={tasks}
            setTasks={setTasks}
            setTextAlertModal={setTextAlertModal}
          />

          <ListItem
            setTasks={setTasks}
            setTextAlertModal={setTextAlertModal}
            tasks={tasks}
            search={search}
          />
        </div>
      </div>
    </>
  );
};
export default Taimer;
