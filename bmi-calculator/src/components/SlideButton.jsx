import { useEffect, useRef, useState } from "react";
import styles from "./SlideButton.module.css";
import Button from "../ui/Button";

function SlideButton({ title, unit, setState, range, start }) {
  const [currentValue, setCurrentValues] = useState(start || 1);
  const refs = useRef([]);
  const sliderRange = range || 200;
  const sliderWidth = 16;
  const numberOfItemApearAtSameTime = 3;
  const itemWidth = sliderWidth / numberOfItemApearAtSameTime;
  const arr = Array.from({ length: sliderRange }, (_, index) => {
    return (
      <span
        key={index}
        data-value={index}
        ref={(el) => (refs.current[index] = el)}
        style={{
          minWidth: `${itemWidth}rem`,
          transform: `translateX(${(-currentValue + 1) * itemWidth}rem)`,
        }}
        className={`${styles.sliderNumber} ${
          index === currentValue ? styles.active : ""
        }`}
      >
        {index}
      </span>
    );
  });

  // Handle increasing the current value
  function handleIncrease() {
    if (currentValue < sliderRange - 1) {
      setCurrentValues(currentValue + 1);
    }
  }

  // Handle decreasing the current value
  function handleDecrease() {
    if (currentValue > 0) {
      setCurrentValues(currentValue - 1);
    }
  }
  useEffect(() => {
    setState(currentValue);
  }, [currentValue, setState]);
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTitle}>
        {title} <span>(in {unit})</span>
      </div>
      <div
        className={styles.slider}
        style={{
          width: `${sliderWidth}rem`,
        }}
      >
        {arr}
      </div>
      <div className={styles.sliderButtons}>
        <Button onMouseDown={handleDecrease} type="small">
          -
        </Button>
        <Button onMouseDown={handleIncrease} type="small">
          +
        </Button>
      </div>
    </div>
  );
}

export default SlideButton;
