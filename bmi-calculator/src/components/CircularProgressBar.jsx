import styles from "./CircularProgressBar.module.css";
function CircularProgressBar({ result }) {
  const width = 300;
  const strokeWidth = 6;
  const ration = 4;
  const center = width / 2;
  const radius = (width - width / ration) / 2;
  const innerBoundary = (width - radius * 2) / 2;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * result) / 100;
  console.log(radius);

  return (
    <div className={styles.container}>
      <div
        className={styles.progressBars}
        style={{
          width: `${width}px`,
          height: `${width}px`,
          "--dashOffset": `${dashOffset}`,
          "--dashArray": `${dashArray}`,
          "--progress": `${result}`,
          "--innerBoundary": `${innerBoundary}`,
        }}
      >
        <svg>
          <defs>
            <filter
              id="inset-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="3" />
              <feOffset dx="-3" dy="-3" result="offsetblur" />
              <feFlood floodColor="rgba(0, 0, 0, 0.3)" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            className={styles.remain}
            filter="url(#inset-shadow)"
          ></circle>
          <circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            className={styles.done}
            // filter="url(#inset-shadow)"
          ></circle>
        </svg>
        <div className={styles.tail}></div>
      </div>
      <div className={styles.result}>{result}</div>
    </div>
  );
}

export default CircularProgressBar;
