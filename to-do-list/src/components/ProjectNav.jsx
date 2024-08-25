import { Link } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import AddButton from "../ui/AddButton";
import DarkModButton from "../ui/DarkModeButton";
import styles from "./ProjectNav.module.css";
import ProjectsList from "./ProjectsList";

function ProjectNav({ showSidebar }) {
  const { setProjects, handelAddNewProject, darkMode, setDarkMode } =
    useProjectContext();
  return (
    <div
      className={`${styles.projectNav} ${
        !showSidebar ? styles.hideNavBar : ""
      }`}
    >
      <div className={styles.logo}>
        <Link to="/">
          {darkMode ? (
            <img src={"/dark-logo.svg"} alt="logo" />
          ) : (
            <img src={"/light-logo.svg"} alt="logo" />
          )}
        </Link>
      </div>
      <div className={styles.addProject}>
        <h3>Projects</h3>
        <div className={styles.projectNavSettings}>
          <DarkModButton
            onClick={() => setDarkMode(!darkMode)}
            darkMode={darkMode}
          />
          <AddButton onClick={handelAddNewProject} darkMode={darkMode} />
        </div>
      </div>
      <nav>
        <ProjectsList />
        <button
          onClick={() => setProjects([])}
          className={`${styles.clearButton} ${darkMode ? styles.darkMode : ""}`}
        >
          clear all
        </button>
      </nav>
    </div>
  );
}

export default ProjectNav;
