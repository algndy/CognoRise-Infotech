import styles from "./CloseButton.module.css";
function CloseButton({ onClick, className, darkMode }) {
  return (
    <span
      className={`${styles.closeButton} ${className} ${
        darkMode ? styles.darkMode : ""
      }`}
      onClick={onClick}
    ></span>
  );
}

export default CloseButton;
