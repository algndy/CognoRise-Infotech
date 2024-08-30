import styles from "./Speedometer.module.css";
function Speedometer({
  children,
  time,
  measure,
  lineWidth,
  LineColor = "#0f0",
}) {
  return (
    <div className={styles.speedo}>
      <h1 className={styles.insiderText}>
        {children < 10 ? `0${children}` : children} {measure}
      </h1>

      {Array.from({ length: time + 1 }, (_, index) => (
        <div
          style={{
            transform: `rotate(${(-360 / time) * index}deg)`,
            animationDelay: `${index / 40}s`,
            width: `${lineWidth}`,
            backgroundColor: index > +children ? LineColor : "",
            boxShadow:
              index > +children
                ? `0 0 15px ${LineColor}${
                    time < 100 ? `, 0 0 15px ${LineColor}` : ""
                  }`
                : "",
          }}
          key={index}
          className={`${styles.smallLines} `}
        ></div>
      ))}
    </div>
  );
}

export default Speedometer;
