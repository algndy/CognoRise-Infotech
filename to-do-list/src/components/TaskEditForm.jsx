import { useState } from "react";
import styles from "./TaskEditForm.module.css";
import { useProjectContext } from "../contexts/ProjectContext";
import CloseButton from "../ui/CloseButton";
function TaskEditForm() {
  const {
    handleEditTask,
    setShowEditTask,
    currentTask: { projectId, listId, taskId },
    projects,
    darkMode,
  } = useProjectContext();

  const {
    name: taskName,
    description: taskDescription,
    piriority: taskPiriority,
  } = projects
    .find((project) => project.id === projectId)
    .lists.find((list) => list.id === listId)
    .tasks.find((task) => task.id === taskId);

  const [name, setName] = useState(taskName);
  const [description, setDescription] = useState(taskDescription);
  const [piriority, setPiriority] = useState(taskPiriority);

  function handleCloseFrom() {
    setName("");
    setDescription("");
    setPiriority("low");
    setShowEditTask(false);
  }
  return (
    <form
      className={`${styles.taskEditForm} ${darkMode ? styles.darkMode : ""}`}
    >
      <div className={styles.taskEditFormSmall}>
        <CloseButton
          onClick={handleCloseFrom}
          className={styles.closeButton}
          darkMode={darkMode}
        />

        <div className={styles.controledElements}>
          <div>
            <label htmlFor="name">Task Name</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="piriority">Piriority</label>
            <select
              name="piriority"
              value={piriority}
              onChange={(e) => setPiriority(e.target.value)}
            >
              <option className={styles.options} value="low">
                low
              </option>
              <option className={styles.options} value="medium">
                medium
              </option>
              <option className={styles.options} value="high">
                high
              </option>
            </select>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleEditTask(name, description, piriority);
            }}
          >
            Change
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskEditForm;
