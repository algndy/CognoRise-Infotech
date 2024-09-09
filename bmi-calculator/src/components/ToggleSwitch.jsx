import { useEffect, useState } from "react";
import styles from "./ToggleSwitch.module.css";
function ToggleSwitch({ setState }) {
  const [value, setValue] = useState("male");

  function handleToggle() {
    value === "male" ? setValue("female") : setValue("male");
  }
  useEffect(() => {
    setState(value);
  }, [setState, value]);

  return (
    <div className={styles.toggleContainer}>
      <span
        className={`${styles.toggles} ${styles.activeBoundary} ${
          value === "male" ? styles.male : styles.female
        }`}
      ></span>
      <span
        onClick={handleToggle}
        className={`${styles.toggles} ${value === "male" ? styles.active : ""}`}
      >
        male
      </span>
      <span
        onClick={handleToggle}
        className={`${styles.toggles} ${
          value === "female" ? styles.active : ""
        }`}
      >
        female
      </span>
    </div>
  );
}

export default ToggleSwitch;
