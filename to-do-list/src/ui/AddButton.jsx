import styles from "./AddButton.module.css";
function AddButton({ onClick, darkMode }) {
  return (
    <span
      className={`${styles.addButton} ${darkMode ? styles.darkMode : ""}`}
      onClick={onClick}
    ></span>
  );
}

export default AddButton;
