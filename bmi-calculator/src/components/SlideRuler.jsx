import React, { useState, useRef, useEffect } from "react";
import styles from "./SlideRuler.module.css";

function SlideRuler({ setState, title, unit }) {
  const [centeredValue, setCenteredValue] = useState(0);
  const rulerRef = useRef(null);

  const rulerLength = 300;

  const linesArray = Array.from({ length: rulerLength }, (_, index) => {
    let lineStyle = "";
    if (index % 10 === 0) {
      lineStyle = styles.large;
    } else if (index % 5 === 0) {
      lineStyle = styles.medium;
    }
    return (
      <div
        key={index}
        style={{ left: `${index * 20}px` }}
        className={`${styles.lines} ${lineStyle}`}
        data-value={index} // Add a data attribute for easy retrieval
      >
        <span className={styles.lineNumber}>
          {(index % 10 === 0 || index % 5 === 0) && index}
        </span>
      </div>
    );
  });

  const handleScroll = () => {
    const rulerElement = rulerRef.current;
    if (!rulerElement) return;

    const rulerRect = rulerElement.getBoundingClientRect();
    const rulerCenterX = rulerRect.left + rulerRect.width / 2;

    let closestLineValue = null;
    let minDistance = Infinity;

    document.querySelectorAll(`.${styles.lines}`).forEach((line) => {
      const lineRect = line.getBoundingClientRect();
      const lineCenterX = lineRect.left + lineRect.width / 2;
      const distance = Math.floor(Math.abs(lineCenterX - rulerCenterX));

      if (distance < minDistance) {
        minDistance = distance;
        closestLineValue = line.getAttribute("data-value");
      }
    });

    setCenteredValue(closestLineValue);
  };

  useEffect(() => {
    const rulerElement = rulerRef.current;

    if (rulerElement) {
      rulerElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (rulerElement) {
        rulerElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    setState(centeredValue);
  }, [centeredValue, setState]);
  return (
    <div className={styles.slideContainer}>
      <div className={styles.rulerTitle}>
        {title || "Title"} <span>(in {unit || "unite"})</span>
      </div>
      <div className={styles.scrollInfo}>
        {centeredValue}
        <br />
        <span>{unit}</span>
      </div>
      <div className={styles.ruler} ref={rulerRef}>
        <div className={styles.linesContainer}>{linesArray}</div>
      </div>
    </div>
  );
}

export default SlideRuler;
