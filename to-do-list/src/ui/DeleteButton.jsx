import styles from "./DeleteButton.module.css";
function DeleteButton({ onClick, darkMode }) {
  return (
    <span
      className={`${styles.deleteButton} ${darkMode ? styles.darkMode : ""}`}
      onClick={onClick}
    ></span>
  );
}

export default DeleteButton;
