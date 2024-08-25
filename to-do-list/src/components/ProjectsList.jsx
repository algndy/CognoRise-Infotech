import styles from "./ProjectsList.module.css";
import ProjectsItems from "./ProjectsItems";
import { useProjectContext } from "../contexts/ProjectContext";

function ProjectsList() {
  const { projects, editable } = useProjectContext();
  return (
    <ul className={`${styles.projectsList} `}>
      {projects.map((project, index) => (
        <ProjectsItems
          editable={editable}
          index={index}
          project={project}
          key={project.id}
        />
      ))}
    </ul>
  );
}

export default ProjectsList;
