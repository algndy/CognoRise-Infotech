import ToDoTask from "./ToDoTask";
import styles from "./ToDoList.module.css";
import { useProjectContext } from "../contexts/ProjectContext";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import AddButton from "../ui/AddButton";
const colors = [
  "rgb(52,105,255)",
  "rgb(252,50,50)",
  "rgb(255,110,195)",
  "rgb(118,196,79)",
];
function ToDoList({ projectId, list }) {
  const { handleDeleteList, handleEditListName, handleAddNewTask, darkMode } =
    useProjectContext();
  const { id: listId, name, tasks } = list;
  return (
    <li className={styles.toDoList}>
      <div
        style={{ borderColor: `${colors[listId % colors.length]}` }}
        className={styles.toDoListHeader}
      >
        <div className={styles.toDoListName}>
          <h3>{name}</h3>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.toDoListSettings}>
          <AddButton
            darkMode={darkMode}
            onClick={() => handleAddNewTask(projectId, listId)}
          />
          <EditButton
            darkMode={darkMode}
            onClick={() => handleEditListName(projectId, listId)}
          />
          <DeleteButton
            darkMode={darkMode}
            onClick={() => handleDeleteList(projectId, listId)}
          />
        </div>
      </div>
      <ul
        className={`${styles.toDoTasksContainer} ${
          darkMode ? styles.darkMode : ""
        }`}
      >
        {tasks.map((task) => (
          <ToDoTask
            projectId={projectId}
            listId={listId}
            task={task}
            key={task.id}
          />
        ))}
      </ul>
    </li>
  );
}

export default ToDoList;
