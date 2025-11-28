import Button from "../../../componetns-chare/button/Button";
import styles from "./Item.module.css";
import TaimerItem from "./TaimerItem/TaimerItem";
import ItemHiddenMenu from "./ItemHiddenMenu/ItemHiddenMenu";

const Item = (props) => {
  const { filteredTasks, handleSubmitTask, deleteTask, setTasks } = props;

  const handleIsEditTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isEdit: !task.isEdit } : task
      )
    );
  };

  const handleTitleChange = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  const handleOpenHiddenMenu = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isHiddenMenuOpen: !task.isHiddenMenuOpen }
          : task
      )
    );
  };

  return (
    <>
      {filteredTasks.map((task) => (
        <div key={task.id} className={styles.div_item_container}>
          <div className={styles.div_item}>
            {task.isEdit ? (
              <textarea
                value={task.title}
                onChange={(e) => handleTitleChange(task.id, e.target.value)}
                maxLength={300}
                className={`${styles.text_area_item} ${
                  task.isDone ? styles.text_area_item_done : ""
                }`}
              >
                {task.title}
              </textarea>
            ) : (
              <h1
                className={`${styles.text_area_item} ${
                  task.isDone ? styles.text_area_item_done : ""
                }`}
              >
                {task.title}
              </h1>
            )}

            <div className={styles.div_botton_panel}>
              <div className={styles.div_task_set_done}>
                <label className={styles.custom_checkbox}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                    fill={task.isDone ? "#FFFFFF" : "#adadadc2"}
                  >
                    <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
                  </svg>
                  <input
                    name="task-done"
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => handleSubmitTask(task.id)}
                  ></input>

                  <span className={styles.checkmark}></span>
                </label>
              </div>

              <TaimerItem task={task} setTasks={setTasks} />

              <div className={styles.div_item_menu}>
                <Button
                  className={styles.button_menu_task}
                  onClick={() => deleteTask(task.id)}
                  children={
                    <svg
                      className={styles.div_time_run_svg}
                      xmlns="http://www.w3.org/2000/svg"
                      height="75%"
                      viewBox="0 -960 960 960"
                      width="75%"
                      fill="#FFFFFF"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  }
                />
                <Button
                  className={styles.button_menu_task}
                  onClick={() => handleIsEditTask(task.id)}
                  children={
                    <svg
                      width="75%"
                      height="75%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17.013L11.413 16.998L21.045 7.458C21.423 7.08 21.631 6.578 21.631 6.044C21.631 5.51 21.423 5.008 21.045 4.63L19.459 3.044C18.703 2.288 17.384 2.292 16.634 3.041L7 12.583V17.013ZM18.045 4.458L19.634 6.041L18.037 7.623L16.451 6.038L18.045 4.458ZM9 13.417L15.03 7.444L16.616 9.03L10.587 15.001L9 15.006V13.417Z"
                        fill={task.isEdit ? "red" : "white"}
                      />
                      <path
                        d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                        fill={task.isEdit ? "red" : "white"}
                      />
                    </svg>
                  }
                />

                <ItemHiddenMenu
                  onClick={handleOpenHiddenMenu}
                  deleteTask={deleteTask}
                  handleIsEditTask={handleIsEditTask}
                  handleTitleChange={handleTitleChange}
                  task={task}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Item;
