import { useState } from "react";
import ProjectNav from "./ProjectNav";
import styles from "./Sidebar.module.css";
import { useProjectContext } from "../contexts/ProjectContext";
function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { darkMode } = useProjectContext();
  return (
    <aside
      className={`${styles.sidebar} ${!showSidebar ? styles.hideSidebar : ""} ${
        darkMode ? styles.darkMode : ""
      }`}
    >
      <ProjectNav showSidebar={showSidebar} />
      <span
        onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
        className={styles.sideButton}
      >
        {!showSidebar ? ">" : "<"}
      </span>
    </aside>
  );
}

export default Sidebar;
