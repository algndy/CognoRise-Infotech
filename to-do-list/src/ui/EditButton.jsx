import styles from "./EditButton.module.css";
function EditButton({ onClick, darkMode }) {
  return (
    <span
      className={`${styles.editButton} ${darkMode ? styles.darkMode : ""}`}
      onClick={onClick}
    ></span>
  );
}

export default EditButton;
