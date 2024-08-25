import styles from "./DarkModeButton.module.css";
function DarkModButton({ onClick, darkMode }) {
  return (
    <span
      className={`${styles.darkModeButton} ${darkMode ? styles.darkMode : ""}`}
      onClick={onClick}
    ></span>
  );
}

export default DarkModButton;
