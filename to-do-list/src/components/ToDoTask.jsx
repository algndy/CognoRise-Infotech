import { useProjectContext } from "../contexts/ProjectContext";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import styles from "./ToDoTask.module.css";

function ToDoTask({ projectId, listId, task }) {
  const { id: taskId, name, description, piriority } = task;
  const { setCurrentTask, setShowEditTask, handleDeleteTask, darkMode } =
    useProjectContext();
  return (
    <li className={`${styles.task} ${darkMode ? styles.darkMode : ""}`}>
      <div className={styles.taskHeader}>
        <span
          className={`${styles.taskPiriority} ${
            piriority === "high"
              ? styles.highPriority
              : piriority === "medium"
              ? styles.mediumPriority
              : styles.lowPriority
          }`}
        >
          {piriority}
        </span>

        <div className={styles.taskSettings}>
          <EditButton
            darkMode={darkMode}
            onClick={() => {
              setShowEditTask(true);
              setCurrentTask({ projectId, listId, taskId });
            }}
          />

          <DeleteButton
            darkMode={darkMode}
            onClick={() => {
              handleDeleteTask(projectId, listId, taskId);
            }}
          />
        </div>
      </div>
      <h4>{name}</h4>
      <p className={styles.taskDescription}>{description}</p>
    </li>
  );
}

export default ToDoTask;
