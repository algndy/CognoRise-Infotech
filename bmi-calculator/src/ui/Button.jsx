import styles from "./Button.module.css";
function Button({ onClick, type, children }) {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
