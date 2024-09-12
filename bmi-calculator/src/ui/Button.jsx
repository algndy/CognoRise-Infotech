import styles from "./Button.module.css";
function Button({ onClick, type, children, onMouseDown }) {
  if (onClick)
    return (
      <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
        {children}
      </button>
    );
  else if (onMouseDown)
    return (
      <button
        className={`${styles.button} ${styles[type]}`}
        onMouseDown={onMouseDown}
      >
        {children}
      </button>
    );
}

export default Button;
