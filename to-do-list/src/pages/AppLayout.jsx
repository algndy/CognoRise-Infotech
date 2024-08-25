import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import { useProjectContext } from "../contexts/ProjectContext";
function AppLayout() {
  const { darkMode } = useProjectContext();
  return (
    <div className={styles.app}>
      <Sidebar />
      <main className={darkMode ? styles.darkMode : ""}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
