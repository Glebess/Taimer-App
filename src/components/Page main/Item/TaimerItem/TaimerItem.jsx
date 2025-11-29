import Button from "../../../../componetns-chare/button/Button";
import styles from "./TaimerItem.module.css";
import { useEffect, useRef } from "react";

const TaimerItem = (props) => {
  const { setTasks, task } = props;

  const intervalRef = useRef(null);

  const formatSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)} : ${pad(minutes)} : ${pad(secs)}`;
  };

  useEffect(() => {
    if (intervalRef.current) return;
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.isRunning && !task.isDone) {
            return { ...task, time: task.time + 1 };
          }
          return task;
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
      intervalRef.current = null;
    };
  }, [task.isRunning, task.time]);

  const handleStartTimer = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isRunning: true } : task
      )
    );
  };

  const handlePauseTimer = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isRunning: false } : task
      )
    );
  };

  return (
    <div className={styles.div_time}>
      <h1 className={styles.h1_time}>{formatSeconds(task.time)}</h1>
      <div className={styles.div_button_taimer}>
        <button
          className={styles.button_time}
          onClick={() => handleStartTimer(task.id)}
          disabled={task.isDone}
        >
          <svg
            className={styles.div_time_run_svg}
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5689 10.8227L1.56895 19.8227C1.41892 19.9265 1.24336 19.9873 1.06126 19.9984C0.879167 20.0096 0.697481 19.9708 0.535877 19.8861C0.374274 19.8015 0.238912 19.6742 0.144445 19.5181C0.0499793 19.362 1.00713e-05 19.1831 -5.14984e-05 19.0007V1.00066C-0.000172444 0.81814 0.0496634 0.639064 0.144056 0.482844C0.238449 0.326624 0.373798 0.199219 0.535435 0.114434C0.697071 0.0296497 0.87883 -0.0092792 1.06101 0.00186647C1.24319 0.0130121 1.41885 0.0738072 1.56895 0.177663L14.5689 9.17766C14.7014 9.27009 14.8096 9.39314 14.8842 9.53634C14.9589 9.67954 14.9979 9.83866 14.9979 10.0002C14.9979 10.1617 14.9589 10.3208 14.8842 10.464C14.8096 10.6072 14.7014 10.7302 14.5689 10.8227Z"
              fill="white"
            />
          </svg>
        </button>

        <Button
          disabled={task.isDone}
          className={styles.button_time}
          onClick={() => handlePauseTimer(task.id)}
        >
          <svg
            className={styles.div_time_pause_svg}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.25 5.5V18.5C10.25 18.9641 10.0656 19.4092 9.73744 19.7374C9.40925 20.0656 8.96413 20.25 8.5 20.25H5.5C5.03587 20.25 4.59075 20.0656 4.26256 19.7374C3.93437 19.4092 3.75 18.9641 3.75 18.5V5.5C3.75263 5.03668 3.93784 4.59309 4.26546 4.26546C4.59309 3.93784 5.03668 3.75263 5.5 3.75H8.5C8.96413 3.75 9.40925 3.93437 9.73744 4.26256C10.0656 4.59075 10.25 5.03587 10.25 5.5ZM20.25 5.5V18.5C20.25 18.9641 20.0656 19.4092 19.7374 19.7374C19.4092 20.0656 18.9641 20.25 18.5 20.25H15.5C15.0359 20.25 14.5908 20.0656 14.2626 19.7374C13.9344 19.4092 13.75 18.9641 13.75 18.5V5.5C13.7526 5.03668 13.9378 4.59309 14.2655 4.26546C14.5931 3.93784 15.0367 3.75263 15.5 3.75H18.5C18.9641 3.75 19.4092 3.93437 19.7374 4.26256C20.0656 4.59075 20.25 5.03587 20.25 5.5Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TaimerItem;
