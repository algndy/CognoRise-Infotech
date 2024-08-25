import styles from "./ProjectsItems.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";

function ProjectsItems({ project }) {
  const {
    projects,
    handleDeleteProject,
    handleStartEditProject,
    ref,
    darkMode,
  } = useProjectContext();
  const navigate = useNavigate();
  const { projectId } = useParams();
  function handleDeleteProjectOnClick() {
    const currentDeletedProjectIndex = projects.findIndex(
      (temp) => temp["id"] === project.id
    );

    if (projects[currentDeletedProjectIndex - 1])
      navigate(`/${projects[currentDeletedProjectIndex - 1].id}`);
    else if (projects[currentDeletedProjectIndex + 1])
      navigate(`/${projects[currentDeletedProjectIndex + 1].id}`);
    else navigate("/");

    handleDeleteProject(project.id);
  }

  return (
    <li
      className={`${styles.projectItem} ${
        +projectId === project.id ? styles.active : ""
      } ${darkMode ? styles.darkMode : ""}`}
    >
      <Link
        ref={(el) => (ref.current[project.id] = el)}
        to={`${project.id}`}
        state={{ project }}
      >
        {project.name.length > 16
          ? project.name.slice(0, 16) + "...."
          : project.name}
      </Link>
      <div className={styles.projectItemSettings}>
        <EditButton
          darkMode={darkMode}
          onClick={async () => {
            await handleStartEditProject(project.id);
            ref.current[project.id].click();
          }}
        />

        <DeleteButton
          darkMode={darkMode}
          onClick={handleDeleteProjectOnClick}
        />
      </div>
    </li>
  );
}

export default ProjectsItems;
