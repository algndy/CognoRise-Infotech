import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import { useEffect } from "react";
import ToDoList from "../components/ToDoList";
import styles from "./Project.module.css";
import TaskEditForm from "../components/TaskEditForm";

function Project() {
  const { projects, handleAddNewList, showEditTask } = useProjectContext();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const location = useLocation();
  const { id, name, lists } =
    projects.filter((project) => project.id === +projectId)[0] ||
    location.state.project;

  useEffect(() => {
    const projectExistence = projects.some((project) => project.id === id);
    if (!projectExistence) navigate("/");
  }, [id, projects, navigate]);

  return (
    <div className={styles.projectLayout}>
      {showEditTask && <TaskEditForm />}
      <div className={styles.projectHeader}>
        <h1>{name}</h1>
        <button
          className={styles.addNewListButton}
          onClick={async () => {
            await handleAddNewList(id);
            navigate(`/${id}`);
          }}
        >
          + New list
        </button>
      </div>
      <ul className={styles.toDoLists}>
        {lists.map((list) => (
          <ToDoList projectId={id} list={list} key={list.id} />
        ))}
      </ul>
    </div>
  );
}

export default Project;
